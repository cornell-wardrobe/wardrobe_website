// Picks up the first image placed in ./images/hero (see README there).
// Returns null when the folder has no photo yet.
// eslint-disable-next-line no-undef
const context = require.context("./images/hero", false, /\.(jpe?g|png|webp)$/i);
const keys = context.keys();

const heroPhoto = keys.length > 0 ? context(keys[0]) : null;

export default heroPhoto;
