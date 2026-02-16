// .lintstagedrc.mjs
export default {
  // Check and fix all JS/TS files
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  // Format only for other file types
  '*.{json,css,md}': ['prettier --write'],
};
