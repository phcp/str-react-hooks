const users = require('../models/users');

module.exports = {
    listAll(req, res) {
        return res.json(users);
    },
};