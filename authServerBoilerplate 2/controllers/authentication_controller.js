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
  res
    .send({
      token: tokenForUser(user),
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      sell: user.sell,
      buy: user.buy
    })
    .catch(next);
};

exports.signup = (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const userProps = req.body;
  //Check if user already exists, send error if they do
  User.findOne({ email }).then(user => {
    if (user) {
      res.status(422).send({ errors: "Email taken" });
    } else {
      User.create(userProps)
        .then(user =>
          res.send({
            token: tokenForUser(user),
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            sell: user.sell,
            buy: user.buy
          })
        )
        .catch(next);
    }
  });
  //   function(err, existingUser) {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (existingUser) {
  //     return res.status(422).send({ error: "Email taken" });
  //   } else {
  //     User.create(userProps).then(user => res.send({ token: tokenForUser(user), user_id: user._id})).catch(next);
  //   }
  //
  // });
};
