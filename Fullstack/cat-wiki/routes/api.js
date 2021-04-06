const router = require("express").Router();
const controller = require("../controllers/api")

router.get("/breeds/", controller.getBreeds);
router.get("/breeds/names", controller.getBreedsNames);
router.get("/breeds/:id", controller.getBreedById);

module.exports = router;
