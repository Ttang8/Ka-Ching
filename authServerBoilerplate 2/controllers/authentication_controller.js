const User = require("../models/user");
const jwt = require('jwt-simple');
const config = require('../config');

const tokenForUser = user => {
    const timestamp = new Date().getTime();
    return jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);
};

exports.signin = function(req, res, next){
  var user = req.user;
<<<<<<< HEAD
  
  res.send({
    token: tokenForUser(user),
    user_id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    sell: user.sell,
    buy: user.buy
  })
  .catch(next);
=======
  res.send({token: tokenForUser(user), user_id: user._id})
>>>>>>> ba43e08217a9bbf649a1797efd6ef2aa74d6a2d0
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "You must provide an email and password" });
  }

  //Check if user already exists, send error if they do
  User.findOne({email: email}, function(err, existingUser) {
      if (err) { return next(err)}
      if (existingUser) {return res.status(422).json({error: "Email taken"})}

      const user = new User({
          email: email,
          password: password
      });
      user.save(function(err) {
          if (err) { return next(err) }
          res.json({user_id: user._id, token: tokenForUser(user)});
      })
  })
};
