const express = require('express');
const next = require('next');
const routes = require('../routes');

// SERVICES
const authService = require('./services/auth');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const secretData = [
	{ title: 'Secret Data 1', description: 'some data ........' },
	{ title: 'Secret Data 2', description: 'some data 2...........'}
]

app.prepare()
	.then(() => {
		const server = express();

		// server.get('/portfolio/:id', (req, res) => {
		// 	const actualPage = '/portfolio'
		// 	const queryParams = { id: req.params.id }
		// 	app.render(req, res, actualPage, queryParams)
		// })

		server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
			return res.json(secretData);
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.use(function(err, req, res, next) {
			if (err.name === 'UnauthorizedError') {
				res.status(401).send({ title: 'Unauthorized', description: 'Unauthorized Access' });
			}
		});

		server.use(handle).listen(3000, (err) => {
			if (err) throw err
			console.log('> Ready on http://localhost:3000')
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})

