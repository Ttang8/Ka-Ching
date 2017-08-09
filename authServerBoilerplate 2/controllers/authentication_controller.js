const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp
    },
    config.secret
  );
};

exports.signin = function(req, res, next) {
  var user = req.user;
  res.send({ token: tokenForUser(user), user_id: user._id });
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
<<<<<<< HEAD
  const password = req.body.password;
=======
>>>>>>> 958c5981434af5e34df9fc87b2b1c746ba83ed31
  const userProps = req.body;

  //Check if user already exists, send error if they do
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).json({ error: "Email taken" });
    }

<<<<<<< HEAD
      User.create(userProps)
        .then(user => res.send(user))
        .catch(next);
=======
    User.create(userProps).then(user => res.send(user)).catch(next);
>>>>>>> 958c5981434af5e34df9fc87b2b1c746ba83ed31
  });
};
