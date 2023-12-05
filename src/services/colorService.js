/**
 * Returns a lightened version of the given color.
 * @param {string} color - The color to be lightened.
 * @param {number} amount - The amount by which to lighten the color.
 * @returns {string} - The lightened color.
 */
export function getLightenColor(color, amount) {
  const num = parseInt(color.replace('#', ''), 16); // convert color to a 32bit-integer
  let r = (num >> 16) + amount;
  r > 255 && (r = 255);
  r < 0 && (r = 0);
  let g = (num & 0x0000ff) + amount;
  g > 255 && (g = 255);
  g < 0 && (g = 0);
  let b = ((num >> 8) & 0x00ff) + amount;
  b > 255 && (b = 255);
  b < 0 && (b = 0);
  return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
}
