const router = require("express").Router();
const controller = require("../controllers/index");

/* GET home page. */
router.get("/", controller.getIndex);

module.exports = router;
