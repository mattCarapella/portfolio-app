const Blog = require('../models/blog');

exports.createBlog = (req, res) => {
	const blogData = req.body;
	const blog = new Blog(blogData);

	if (req.user) {
		const userId = user.sub;
		const author = user.name;
	}
	
	blog.save((err, createdBlog) => {
		if (err) {
			return res.status(422).send(err);
		}
		return res.json(createdBlog);
	});
}

