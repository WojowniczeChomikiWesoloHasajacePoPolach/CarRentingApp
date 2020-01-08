const express = require('express');
const router = express.Router();
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

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

//auth with Fb
passport.use(new FacebookStrategy({
  clientID: '1061924937473208',
  clientSecret: 'b74211242d2119f20cfe218377055d22',
  callbackURL: 'http://localhost:8000/'
  },

  function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    console.log(accessToken);
    console.log(refreshToken);
    User.findOrCreate({facebookId: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

router.get('/facebook', passport.authenticate('facebook', {
  scope: 'email'
}));

//logout

router.get('/logout', async(req,res) => {
    res.send('Logging out')
});

module.exports = router;