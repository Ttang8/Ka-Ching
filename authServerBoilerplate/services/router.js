const passport = require('passport');

const AuthenticationController = require('../controllers/authentication_controller');
const passportService = require('./passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false});
const router = require('express').Router();

// Auth Routes
// --------------------------------------------------------------------

router.route('/signup').post(AuthenticationController.signup);
router.route('/signin').post([requireLogin, AuthenticationController.signin]);

// xxx Routes
// --------------------------------------------------------------------
// const protected = (req, res, next) => {
//     res.send("Here's the secret");
// }
// router.route('/protected').get(requireAuth, protected);

module.exports = router;
