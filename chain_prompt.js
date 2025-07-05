function tokebabCase(input) {
    // Sanitize and validate input
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null.');
    }

    // Convert numbers to string
    if (typeof input === 'number') {
        input = input.toString();
    }

    if (typeof input !== 'string') {
        throw new Error('Input must be a string or a number.');
    }

    // Trim and normalize whitespace
    let str = input.trim();
    if (str.length === 0) {
        throw new Error('Input string cannot be empty.');
    }

    // Convert to kebab-case
    str = str
        // Replace underscores and spaces with a dash
        .replace(/[_\s]+/g, '-')
        // Insert dash before uppercase letters (for camelCase or PascalCase)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Lowercase everything
        .toLowerCase()
        // Remove any non-alphanumeric/dash characters
        .replace(/[^a-z0-9-]/g, '')
        // Remove multiple dashes
        .replace(/-+/g, '-')
        // Remove leading/trailing dashes
        .replace(/^-+|-+$/g, '');

    if (str.length === 0) {
        throw new Error('Input string does not contain valid characters for kebab-case.');
    }

    return str;
}

module.exports = tokebabCase;