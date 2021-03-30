const { Router } = require("express");
const imageController = require("../controllers/imageContoller");

const router = Router();

router.get("/", (req, res) => {
    res.send("hi");
});
router.get("/api/images", imageController.getImages);
router.post("/api/image", imageController.saveImage);
router.delete("/api/delete/:id", imageController.deleteImage);


module.exports = router;
