const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    optimizedUrl: { type: String, required: true },
    thumbnail: { type: String, required: true },
    // intentionally bloating the document with unused metadata
    metadata: {
      cameraModel: { type: String },
      iso: { type: Number },
      aperture: { type: String },
      shutterSpeed: { type: String },
      rawEXIFData: { type: Object, default: {} },
    },
    views: { type: Number, default: 0 },
  },
  { timestamps: true },
);

// NOTICE: Intentionally NOT creating and indexes here until we added optimised route.
imageSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Image", imageSchema);
