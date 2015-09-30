// passport
var passport = require('passport');
var VKontakteStrategy = require('passport-vkontakte').Strategy;

// Passport session setup.
// To support persistent login sessions, Passport needs to be able to
// serialize users into and deserialize users out of the session. Typically,
// this will be as simple as storing the user ID when serializing, and finding
// the user by ID when deserializing. However, since this example does not
// have a database of user records, the complete Yandex profile is
// serialized and deserialized.
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new VKontakteStrategy({
        clientID:     VKONTAKTE_APP_ID, // VK.com docs call it 'API ID'
        clientSecret: VKONTAKTE_APP_SECRET,
        callbackURL:  "http://localhost:3000/auth/vkontakte/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ vkontakteId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

module.exports = passport;