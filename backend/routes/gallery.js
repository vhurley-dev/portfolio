const express = require("express");
const router = express.Router();
const Image = require("../models/image");

// Unoptimised route to get all images
router.get("/unoptimised", async (req, res) => {
  try {
    console.time("Unoptimised DB Query Time");

    // ANTI-PATTERN 1: Fetching all images no limit/pagination
    // ANTI-PATTERN 2: Sorting without an index causes a full collection scan, which is inefficient for large datasets
    // ANTI-PATTERN 3: Pulling bloated documents with heavy metadata fields

    const images = await Image.find({}).sort({ createdAt: -1 });
    console.timeEnd("Unoptimised DB Query Time");
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Optimised route to get all images
router.get("/optimised", async (req, res) => {
  try {
    console.time("Optimised DB Query Time");

    // 1. Read query parameters from the frontend (default to page 1, limit 12)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    // 2. The New Query Chain: Projection and Pagination
    const images = await Image.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("title optimizedUrl thumbnail views metadata.cameraModel");

    // 3. Map the documents so the frontend can still cleanly read .url
    const formattedImages = images.map((img) => ({
      _id: img._id,
      title: img.title,
      url: img.optimizedUrl, // Maps the R2 CDN link to the standard 'url' property
      thumbnail: img.thumbnail,
      views: img.views,
      metadata: img.metadata,
    }));

    // 4. Count total documents so the frontend knows how many pages exist
    const totalImages = await Image.countDocuments();

    console.timeEnd("Optimised DB Query Time");
    res.json({
      images: formattedImages, // The actual chunk of data (e.g., 12 items)
      pagination: {
        totalImages, // e.g., 400 (so the FE knows the total scope)
        currentPage: page, // e.g., 1 (so the FE knows where it is)
        totalPages: Math.ceil(totalImages / limit), // e.g., 34 pages total
      },
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
