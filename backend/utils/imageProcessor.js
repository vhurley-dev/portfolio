require("dotenv").config();
const sharp = require("sharp");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

console.log("R2 Config Check:", {
  accountId: process.env.R2_ACCOUNT_ID ? "Loaded" : "MISSING",
  accessKey: process.env.R2_ACCESS_KEY_ID ? "Loaded" : "MISSING",
  secretKey: process.env.R2_SECRET_ACCESS_KEY ? "Loaded" : "MISSING",
});

// Initialize the S3 Client pointing to Cloudflare R2
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function processAndUploadImage(inputBuffer, filename) {
  try {
    // 1. Process the image buffer in-memory with Sharp
    const optimizedBuffer = await sharp(inputBuffer)
      .resize({
        width: 1200, // Cap max width to a clean, performant 1200px
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 80, // Web compression (80%)
        progressive: true,
      })
      .toBuffer();

    const destinationKey = `optimized/${filename}`;

    // 2. Stream the optimised buffer directly to Cloudflare R2
    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: destinationKey,
      Body: optimizedBuffer,
      ContentType: "image/jpeg",
    });

    await s3Client.send(uploadCommand);

    // 3. Return the public CDN URL to save in MongoDB
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${destinationKey}`;
    console.log(`Successfully processed & uploaded to R2: ${filename}`);

    return publicUrl;
  } catch (error) {
    console.error("Error processing and uploading image to R2:", error);
    throw error;
  }
}

module.exports = { processAndUploadImage };
