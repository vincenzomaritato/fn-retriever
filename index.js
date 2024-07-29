/**
 * Retrieves the name of a named function.
 *
 * @param {Function} fn - The function whose name is to be retrieved.
 * @returns {string} - The name of the function.
 * @throws {TypeError} - If the argument is not a function.
 */
export function getFunctionName(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Argument must be a function');
  }

  const name = fn.displayName || fn.name;

  // If name is empty, try to extract it from the function string representation
  if (!name) {
    const match = /function\s*([^\s(]+)?\s*\(/.exec(fn.toString());
    return match && match[1] ? match[1] : '';
  }

  // Handle named function expressions (e.g., const myFunc = function myFuncName() {})
  if (name === 'anonymousFunction' || name === 'arrowFunction') {
    return '';
  }

  return name;
}