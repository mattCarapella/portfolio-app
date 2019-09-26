const Blog = require('../models/blog');
const AsyncLock = require('async-lock');
const lock = new AsyncLock();

exports.createBlog = (req, res) => {
	const lockId = req.query.lockId;
	
	if (!lock.isBusy(lockId)) {
		lock.acquire(lockId, function(done) {
	  	const blogData = req.body;
			const blog = new Blog(blogData);
			if (req.user) {
				blog.userId = req.user.sub;
				blog.author = req.user.name;
			}
			
			blog.save((err, createdBlog) => {
				setTimeout(() => done(), 5000);
				if (err) {
					return res.status(422).send(err);
				}
				return res.json(createdBlog);
			});

		}, function(err, ret) {
		    if (err) console.log(err);
		});
	}
	else {
		return res.status(422).send({message: 'Blog is saving.'});
	}
}


exports.getBlogById = (req, res) => {
  const blogId = req.params.id;

  Blog.findById(blogId, (err, foundBlog) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(foundBlog);
  });
}


exports.getUserBlogs = (req, res) => {
	const userId = req.user.sub;
	Blog.find({userId}, function(err, userBlogs) {
		if (err) {
			return res.status(422).send(err);
		}

		return res.json(userBlogs);
	})
}


exports.updateBlog = (req, res) => {
  const blogId = req.params.id;
  const blogData = req.body;

  Blog.findById(blogId, function(err, foundBlog) {
    if (err) {
      return res.status(422).send(err);
    }

    foundBlog.set(blogData);
    foundBlog.updatedAt = new Date();
    foundBlog.save(function(err, foundBlog) {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(foundBlog);
    });
  });
}
