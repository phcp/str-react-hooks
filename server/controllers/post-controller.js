const posts = require('../models/posts');

module.exports = {
    getPostsByUserId(req, res) {
        const userPosts = posts.filter(post => post.userId === req.params.id);
        return res.json(userPosts);
    },
};