// This script optimizes images by converting them to WebP format
// To be run as part of the build process

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const publicImagesDir = path.join(__dirname, '../public/images');
const responsiveDir = path.join(publicImagesDir, 'responsive');

// Create responsive directory if it doesn't exist
if (!fs.existsSync(responsiveDir)) {
  fs.mkdirSync(responsiveDir, { recursive: true });
}

// Widths for responsive images
const responsiveWidths = [400, 800, 1200, 1600];

// Process all images in the images directory
async function processImages() {
  try {
    // Get all image files
    const files = fs.readdirSync(publicImagesDir);
    
    console.log(`Found ${files.length} files in images directory`);
    
    // Filter for image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext) && !file.includes('responsive');
    });
    
    console.log(`Processing ${imageFiles.length} image files...`);
    
    // Process each image
    for (const file of imageFiles) {
      const filePath = path.join(publicImagesDir, file);
      const fileBaseName = path.basename(file, path.extname(file));
      
      // Create WebP version in original size
      const webpPath = path.join(publicImagesDir, `${fileBaseName}.webp`);
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      console.log(`Created WebP version of ${file}`);
      
      // Create responsive versions
      for (const width of responsiveWidths) {
        const responsiveWebpPath = path.join(responsiveDir, `${fileBaseName}-${width}w.webp`);
        await sharp(filePath)
          .resize(width)
          .webp({ quality: 80 })
          .toFile(responsiveWebpPath);
      }
      
      console.log(`Created responsive versions of ${file}`);
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Run the image processing
processImages();
