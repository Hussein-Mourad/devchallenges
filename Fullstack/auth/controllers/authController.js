const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  // Incorrect email and/or password
  if (err.message === "Incorrect email or password") {
    return { errors: { error: err.message } };
  }
  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }
  // validation errors
  if (err.message.toLowerCase().includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 10 * 24 * 60 * 60; // 10 days
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.check_auth_post = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    res.status(401).json({ user: null });
    return;
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (!err) {
      let user = await User.findById(decodedToken.id);
      res.status(201).json({ user: user._id });
      return;
    }
    res.status(401).json({ user: null });
    return;
  });
};

module.exports.signup_post = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.error(err);
    res.json(handleErrors(err));
  }
};

module.exports.login_post = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.error(err);
    res.json(handleErrors(err));
  }
};
module.exports.logout_get = async (req, res, next) => {
  res.cookie("jwt", "", { maxAge: 1 });
  req.logout(); 
  res.redirect("/");
};
