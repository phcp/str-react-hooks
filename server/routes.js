const PostController = require('./controllers/post-controller');
const UserController = require('./controllers/user-controller');

module.exports = function (router) {
    router.get('/online', (req, res) => res.json(new Date()));
    router.get('/users', UserController.listAll);
    router.get('/users/:id/posts', PostController.getPostsByUserId);
};