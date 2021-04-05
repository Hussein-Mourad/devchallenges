const router = require("express").Router();
const indexController = require("../controllers/index")

/* GET home page. */
router.get("/", indexController.getIndex);

module.exports = router;
