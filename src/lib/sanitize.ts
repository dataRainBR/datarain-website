import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks
 * Allows common formatting tags while removing potentially dangerous elements
 */
export const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
      'img', 'blockquote', 'code', 'pre', 'span', 'div',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'figure', 'figcaption', 'b', 'i', 'u', 's', 'sup', 'sub'
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'id',
      'target', 'rel', 'width', 'height'
    ],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
};

/**
 * Strips all HTML tags and returns plain text
 * Useful for excerpts and meta descriptions
 */
export const stripHTML = (html: string): string => {
  // First sanitize to prevent any malicious code
  const sanitized = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
  
  // Use browser's built-in text extraction
  const temp = document.createElement('div');
  temp.innerHTML = sanitized;
  return temp.textContent || temp.innerText || '';
};
