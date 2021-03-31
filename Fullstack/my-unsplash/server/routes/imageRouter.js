const { Router } = require("express");
const imageController = require("../controllers/imageContoller");

const router = Router();

router.get("/", (req, res) => {
    res.send("hi");
});
router.get("/api/images", imageController.getImages);
router.get("/api/images/:query", imageController.filterImages);
router.post("/api/image", imageController.saveImage);
router.delete("/api/delete/:id/:password", imageController.deleteImage);


module.exports = router;
