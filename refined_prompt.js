/**
 * Converts a string or number to camelCase format.
 *
 * Handles input strings with spaces, underscores, hyphens, and mixed casing.
 * Numeric inputs are converted to strings.
 * Throws an error if the input is undefined or null.
 * Preserves acronyms (all-uppercase words) as uppercase if detected.
 *
 * Examples:
 *   toCamelCase('first name');      // 'firstName'
 *   toCamelCase('user_id');         // 'userId'
 *   toCamelCase('SCREEN_NAME');     // 'screenName'
 *   toCamelCase('API_KEY');         // 'apiKEY'
 *   toCamelCase(12345);             // '12345'
 *
 * @param {string|number} input - The input value to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is undefined, null, or not a string or number.
 */

/**
 * Converts a string or number to dot.case format.
 *
 * Handles input strings with spaces, underscores, hyphens, and mixed casing.
 * Converts camelCase to separate words before joining with dots.
 * Numeric inputs are converted to strings.
 * Throws an error if the input is undefined or null.
 *
 * Examples:
 *   toDotCase('first name');      // 'first.name'
 *   toDotCase('user_id');         // 'user.id'
 *   toDotCase('screenName');      // 'screen.name'
 *   toDotCase('API_KEY');         // 'api.key'
 *   toDotCase(12345);             // '12345'
 *
 * @param {string|number} input - The input value to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is undefined, null, or not a string or number.
 */
