const express = require('express');
const router = express.Router();
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//auth with google

passport.use(new GoogleStrategy({
    clientID: '537803304374-l4t0hm7vq1s4em4febq4nh4r8re7morv.apps.googleusercontent.com',
    clientSecret: 'TdeU89tEmy5kdC7FgNPQ3E9i',
    callbackURL: "http://localhost:8000/"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


//logout

router.get('/logout', async(req,res) => {
    res.send('Logging out')
});

module.exports = router;