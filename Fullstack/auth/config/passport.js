const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");

function passportConfig(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        if (!profile.emails) {
          profile.emails = {
            0: {
              value:
                Math.floor(Math.random() * 9999999999999).toString(16) +
                "@dummy.com",
            },
          };
        }
        const newUser = {
          authId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
          email: profile.emails[0].value,
          password:
            "A" + Math.floor(Math.random() * 9999999999999).toString(16),
        };

        try {
          let user = await User.findOne({ authId: profile.id });

          if (!user) {
            user = await User.create(newUser);
          }
          done(null, user);
        } catch (err) {
          console.error(err);
          done(null, null);
        }
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        if (!profile.emails) {
          profile.emails = {
            0: {
              value:
                Math.floor(Math.random() * 9999999999999).toString(16) +
                "@dummy.com",
            },
          };
        }
        const newUser = {
          authId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
          email: profile.emails[0].value,
          password:
            "A" + Math.floor(Math.random() * 9999999999999).toString(16),
        };

        try {
          let user = await User.findOne({ authId: profile.id });

          if (!user) {
            user = await User.create(newUser);
          }
          done(null, user);
        } catch (err) {
          console.error(err);
          done(null, null);
        }
      }
    )
  );
  passport.use(
    new TwitterStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        if (!profile.emails) {
          profile.emails = {
            0: {
              value:
                Math.floor(Math.random() * 9999999999999).toString(16) +
                "@dummy.com",
            },
          };
        }
        const newUser = {
          authId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
          email: profile.emails[0].value,
          password:
            "A" + Math.floor(Math.random() * 9999999999999).toString(16),
        };

        try {
          let user = await User.findOne({ authId: profile.id });

          if (!user) {
            user = await User.create(newUser);
          }
          done(null, user);
        } catch (err) {
          console.error(err);
          done(null, null);
        }
      }
    )
  );
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        if (!profile.emails) {
          profile.emails = {
            0: {
              value:
                Math.floor(Math.random() * 9999999999999).toString(16) +
                "@dummy.com",
            },
          };
        }
        const newUser = {
          authId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
          email: profile.emails[0].value,
          password:
            "A" + Math.floor(Math.random() * 9999999999999).toString(16),
        };

        try {
          let user = await User.findOne({ authId: profile.id });

          if (!user) {
            user = await User.create(newUser);
          }
          done(null, user);
        } catch (err) {
          console.error(err);
          done(null, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
}

module.exports = passportConfig;
