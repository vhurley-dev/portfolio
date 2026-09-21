const mongoose = require("mongoose");
const Image = require("./models/image");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing data so we start clean
    await Image.deleteMany({});
    console.log("Cleared existing image documents.");

    const cameras = [
      "Canon EOS R5",
      "Sony A7IV",
      "Nikon Z9",
      "Fujifilm X-T5",
      "Leica M11",
    ];
    const imagesToInsert = [];

    for (let i = 1; i <= 400; i++) {
      // Using picsum.photos for reliable, distinct high-res image placeholders
      const randomId = (i % 100) + 1;

      imagesToInsert.push({
        title: `Portfolio Gallery Showcase #${i}`,
        url: `https://picsum.photos/id/${randomId}/4000/3000`,
        thumbnail: `https://picsum.photos/id/${randomId}/800/600`,
        metadata: {
          cameraModel: cameras[i % cameras.length],
          iso: 100 * ((i % 8) + 1),
          shutterSpeed: `1/${100 + i * 5}s`,
          // Intentional heavy raw JSON data to bloat the document size
          rawEXIFData: {
            lens: "50mm f/1.8 Prime",
            focalLength: "50mm",
            aperture: `f/${(i % 5) + 1}.8`,
            colorSpace: "sRGB",
            gpsCoordinates: {
              lat: 51.5074 + i * 0.0001,
              lng: -0.1278 + i * 0.0001,
            },
            internalNotes:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Heavy metadata chunk designed to increase payload weight for profiling.",
          },
        },
        views: Math.floor(Math.random() * 10000),
      });
    }

    await Image.insertMany(imagesToInsert);
    console.log(
      `Success! Inserted ${imagesToInsert.length} unoptimized documents into MongoDB.`,
    );

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedDatabase();
