const User = require("../models/user.js");

module.exports = {
  getUsers(req, res, next) {
    User.find({}).then(users => res.send(users)).catch(next);
  },

  getUser(req, res, next) {
    const userId = req.params.id;

    User.findOne({ _id: userId }).then(user => res.send(user)).catch(next);
  },

  updateUser(req, res, next) {
    const userId = req.params.id;
    const userProps = req.body;

    User.findByIdAndUpdate({ _id: userId }, userProps)
      .then(() => User.findById({ _id: userId }))
      .then(user => res.send(user))
      .catch(next);
  }
};
