import { format } from 'date-fns';

/**
 * Format a date string or Date object into a human-readable format
 * @param {string|Date} date - The date to format
 * @returns {string} - The formatted date string
 */
export function formatDate(date) {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  return format(dateObject, 'MMMM d, yyyy');
}
