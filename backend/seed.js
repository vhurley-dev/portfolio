const mongoose = require("mongoose");
const Image = require("./models/image");
const { processAndUploadImage } = require("./utils/imageProcessor");
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

    // Tip: Change to a smaller number like 10 or 20 first to test quickly!
    for (let i = 1; i <= 400; i++) {
      const randomId = (i % 100) + 1;
      const rawUrl = `https://picsum.photos/id/${randomId}/4000/3000`;
      const title = `Portfolio Gallery Showcase #${i}`;

      try {
        console.log(`Processing [${i}/400]: ${title}...`);

        // 1. Fetch raw high-res image from Picsum
        const response = await fetch(rawUrl);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const arrayBuffer = await response.arrayBuffer();
        const inputBuffer = Buffer.from(arrayBuffer);

        // 2. Process with Sharp & upload to Cloudflare R2
        const filename = `image-${randomId}-${i}-${Date.now()}.jpg`;
        const r2OptimizedUrl = await processAndUploadImage(
          inputBuffer,
          filename,
        );

        // 3. Push document to array
        imagesToInsert.push({
          title,
          url: rawUrl,
          optimizedUrl: r2OptimizedUrl,
          thumbnail: `https://picsum.photos/id/${randomId}/800/600`,
          metadata: {
            cameraModel: cameras[i % cameras.length],
            iso: 100 * ((i % 8) + 1),
            shutterSpeed: `1/${100 + i * 5}s`,
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
      } catch (itemError) {
        console.warn(
          `⚠️ Warning: Skipped item #${i} due to fetch/processing error:`,
          itemError.message,
        );
        // Continue to the next loop iteration instead of crashing
      }
    }

    await Image.insertMany(imagesToInsert);
    console.log(
      `Success! Inserted ${imagesToInsert.length} production-ready documents into MongoDB and synced to R2.`,
    );

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedDatabase();
