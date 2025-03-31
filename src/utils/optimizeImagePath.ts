import { getImage } from 'astro:assets';

/**
 * Utility to get an optimized image URL using Astro's image optimization
 */
export async function getOptimizedImageUrl(path: string, width: number = 1200, height: number = 675): Promise<string> {
  // For remote URLs, just return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  try {
    // For local paths in the public directory
    if (path.startsWith('/')) {
      // Make a direct import of the image
      const imageUrl = new URL(path, import.meta.url);
      
      // Use getImage to process the image
      const optimizedImage = await getImage({
        src: imageUrl, 
        width: width,
        height: height,
        format: 'webp',
      });
      
      return optimizedImage.src;
    }
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
  
  // Return original path if optimization fails
  return path;
}

/**
 * Legacy function for backwards compatibility
 */
export function optimizeImagePath(path: string): string {
  if (!path) return '';
  return path;
}
