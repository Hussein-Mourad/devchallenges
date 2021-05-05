const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Checks if json web token exists and is verified
module.exports.requireAuth = (req, res, next) => {
  const token = req.cookie.jwt;
  if (!token) {
    res.redirect("/login");
    next();
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (!err) {
      next();
    }
    res.redirect("/login");
  });
};

module.exports.checkUser = (req, res, next) => {
  const token = req.cookie.jwt;
  if (!token) {
    res.locals.user = null;
    next();
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (!err) {
      let user = await User.findById(decodedToken.id);
      res.locals.user = user;
      next();
    }
    res.locals.user = null;
    next();
  });
};
