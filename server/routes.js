const PostController = require('./controllers/post-controller');

module.exports = function (router) {
    router.get('/online', (req, res) => res.json(new Date()));
    router.get('/posts', PostController.listAll);
};