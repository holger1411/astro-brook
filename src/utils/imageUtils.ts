import { getImage } from 'astro:assets';
import type { GetImageResult, ImageMetadata, LocalImageProps } from 'astro';

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
 * This function dynamically imports images or processes remote URLs
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
  
  // For string paths that are local (start with /)
  if (typeof src === 'string' && src.startsWith('/')) {
    try {
      // Try to dynamically import the image from the assets directory
      // This pattern uses a regex to match any image file in the assets directory
      const images = import.meta.glob('/src/assets/**/*.{jpeg,jpg,png,gif,webp,avif,svg}');
      
      // Remove the leading slash and attempt to find in assets
      const assetPath = `/src${src}`;
      
      if (images[assetPath]) {
        const importedImage = await images[assetPath]();
        imageSource = importedImage.default;
      } else {
        // If it's not in assets and is a remote image, we need both dimensions
        // If height is not provided, use a default aspect ratio of 16:9
        if (!finalHeight && finalWidth) {
          // Default to 16:9 aspect ratio if height is missing
          finalHeight = Math.round(finalWidth * (9/16));
        }
        
        // If width is not provided but height is, use 16:9 aspect ratio
        if (!finalWidth && finalHeight) {
          finalWidth = Math.round(finalHeight * (16/9));
        }
        
        // If neither is provided, set defaults
        if (!finalWidth && !finalHeight) {
          finalWidth = 800;
          finalHeight = 450;
        }
      }
    } catch (error) {
      console.error(`Failed to resolve image: ${src}`, error);
      // Fall back to the original source
    }
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
      // Calculate height based on aspect ratio if it's a string source
      let height;
      if (typeof src === 'string') {
        // Default to 16:9 aspect ratio for responsive images
        height = Math.round(width * (9/16));
      }
      
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