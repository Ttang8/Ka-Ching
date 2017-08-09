const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const validateEmail = email => /\S+@\S+\.\S+/.test(email);

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Email address is required"],
    validate: {
      validator: validateEmail,
      message: "Please enter a valid email"
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    validate: {
      validator: (username) => username.length > 2,
      message: 'Username must be longer than 2 characters'
    }
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'image'
  },
  sell: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }],
  buy: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }]
});

userSchema.pre("save", function(next) {
  const user = this;
  if (user.isNew || user.isModified("password")) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model("user", userSchema);
