const express = require("express");
const router = express.Router();
const GalleryController = require("../controllers/gallery");

router.get("/unoptimised", GalleryController.getUnpoptimisedImages);
router.get("/optimised", GalleryController.getOptimisedImages);

module.exports = router;
