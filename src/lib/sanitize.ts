import DOMPurify from "dompurify";

/**
 * XSS defense, layer 1: don't render raw HTML at all.
 * Everywhere in this app, user-provided or server-provided text is rendered
 * as React children (e.g. <p>{value}</p>), which React escapes automatically.
 * We never use dangerouslySetInnerHTML for user content.
 *
 * XSS defense, layer 2: this module exists ONLY for the rare, explicitly
 * trusted case where rich HTML must be rendered (e.g. a CMS-authored page).
 * Even then, output is run through DOMPurify with a strict allow-list
 * before it ever reaches the DOM.
 */

const STRICT_CONFIG = {
  ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "p", "br", "ul", "ol", "li"],
  ALLOWED_ATTR: ["href", "target", "rel"],
  ALLOW_DATA_ATTR: false,
  ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,
};

/** Sanitize a trusted-source HTML string before rendering it. Never pass raw user input here as an escape hatch. */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, STRICT_CONFIG);
}

/** Strip all tags — use for plain-text contexts (e.g. building a page <title>, meta description, alt text) from dynamic data. */
export function stripTags(input: string): string {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

/** Normalize + trim + cap length for any free-text form field before it leaves the client. Server re-validates independently — never trust the client. */
export function normalizeText(input: string, maxLength = 2000): string {
  return input.normalize("NFC").trim().slice(0, maxLength);
}
