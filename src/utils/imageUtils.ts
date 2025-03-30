import { getImage } from 'astro:assets';
import type { GetImageResult, ImageMetadata } from 'astro';

/**
 * Type definition for supported image options
 */
export interface OptimizedImageOptions {
  src: string | ImageMetadata;
  alt: string;
  width?: number;
  height?: number;
  format?: 'webp' | 'avif' | 'png' | 'jpg' | 'jpeg';
  quality?: number;
}

/**
 * Get an optimized image URL with all processing handled by Astro's image service
 * 
 * @param options Image options including source, alt text, dimensions, and format
 * @returns Promise resolving to an optimized image URL
 */
export async function getOptimizedImageUrl(options: OptimizedImageOptions): Promise<GetImageResult> {
  const { src, alt, width, height, format = 'webp', quality = 80 } = options;
  
  // Process local or remote images
  let imageSource = src;
  let finalWidth = width;
  let finalHeight = height;
  
  // Handle height/width calculations if needed
  if (!finalHeight && finalWidth) {
    // Default to 16:9 aspect ratio if height is missing
    finalHeight = Math.round(finalWidth * (9/16));
  }
  
  if (!finalWidth && finalHeight) {
    // If width is not provided but height is, use 16:9 aspect ratio
    finalWidth = Math.round(finalHeight * (16/9));
  }
  
  if (!finalWidth && !finalHeight) {
    // If neither is provided, set defaults
    finalWidth = 800;
    finalHeight = 450;
  }
  
  try {
    // For string paths that are local (start with /)
    if (typeof src === 'string' && src.startsWith('/')) {
      // First check if it's an image in the assets directory
      try {
        // This uses Vite's glob import to find images in the assets directory
        const assetImages = import.meta.glob('/src/assets/**/*.{jpeg,jpg,png,gif,webp,avif,svg}', { eager: true });
        
        // Check if the image exists in the src/assets directory
        const assetPath = `/src${src}`;
        if (assetImages[assetPath]) {
          imageSource = assetImages[assetPath].default;
        } 
        // If not found in assets, check if it's in /public/images
        else if (src.startsWith('/images/')) {
          // For images in the public directory, create a new URL
          // We need to make it an absolute URL for Astro's image service
          const baseUrl = import.meta.env.SITE || 'http://localhost:4321';
          imageSource = new URL(src, baseUrl).href;
        }
      } catch (error) {
        console.error(`Failed to resolve image path: ${src}`, error);
      }
    }
  } catch (error) {
    console.error(`Error processing image: ${src}`, error);
  }
  
  // Process the image using Astro's built-in image service
  return await getImage({
    src: imageSource,
    alt,
    width: finalWidth,
    height: finalHeight,
    format,
    quality
  });
}

/**
 * Helper function to generate responsive image sources
 * Creates srcset for multiple screen sizes
 * 
 * @param src Image source
 * @param widths Array of widths to generate
 * @returns Promise resolving to an array of { srcset, width } objects
 */
export async function generateResponsiveSrcSet(
  src: string | ImageMetadata,
  alt: string,
  widths: number[] = [400, 800, 1200, 1600]
): Promise<Array<{ srcset: string, width: number }>> {
  const sources = await Promise.all(
    widths.map(async (width) => {
      // Calculate height based on aspect ratio for responsive images
      let height = Math.round(width * (9/16));
      
      const optimized = await getOptimizedImageUrl({
        src,
        alt,
        width,
        height,
        format: 'webp'
      });
      
      return {
        srcset: optimized.src,
        width
      };
    })
  );
  
  return sources;
}