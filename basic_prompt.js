/**
 * Converts a string to camelCase.
 * Example: camelCaseConverter("string bean") returns "stringBean"
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function camelCaseConverter(str) {
    return str
        .toLowerCase()
        .split(/[\s-_]+/)
        .map((word, index) =>
            index === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

// Example usage:
console.log(camelCaseConverter("string bean")); // Output: stringBean