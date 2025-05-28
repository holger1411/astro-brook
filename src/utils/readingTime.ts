/**
 * Calculate estimated reading time for content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Object with reading time in minutes and formatted display text
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200) {
  // Remove HTML tags and markdown syntax for accurate word count
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace markdown links with text
    .replace(/[#*_`~]/g, '') // Remove markdown formatting characters
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count words by splitting on whitespace
  const wordCount = cleanContent.split(/\s+/).filter(word => word.length > 0).length;
  
  // Calculate reading time in minutes
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  // Format display text
  const displayText = readingTimeMinutes === 1 
    ? '1 min read' 
    : `${readingTimeMinutes} min read`;

  return {
    minutes: readingTimeMinutes,
    words: wordCount,
    text: displayText
  };
}

/**
 * Get reading time for an Astro content entry
 * @param entry - Astro content collection entry
 * @returns Reading time object
 */
export function getReadingTime(entry: { body: string }) {
  return calculateReadingTime(entry.body);
}
