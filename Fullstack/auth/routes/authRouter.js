const router = require("express").Router();
const authController = require("../controllers/authController");

// router.get('/signup', (req, res,next)=>{
//   console.log(req.body)
//   res.send("hi")
// })

// @desc  Checks if a user is auth
// @route POST /auth
router.post("/", authController.check_auth_post);

// @desc  Signup a user with email and password
// @route POST /auth/signup
router.post("/signup", authController.signup_post);

// @desc  login a user
// @route POST /auth/login
router.post("/login", authController.login_post);

// @desc    Logout user
// @route   /auth/logout
router.get("/logout", authController.logout_get);

// @desc    Auth with Google
// @route   GET /auth/google
router.get("/google", authController.googleAuth);

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get("/google/callback", authController.googleCallback,(req,res)=>{
  res.redirect("/")
});


module.exports = router;
