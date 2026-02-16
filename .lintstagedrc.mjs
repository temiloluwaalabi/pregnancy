// const LintStagedConfig = {
//   // Target everything EXCEPT the shadcn ui folder
//   '!(components/ui/**)*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
//   // Format everything else
//   '*.{json,css,md}': ['prettier --write'],
// };

// export default LintStagedConfig;

// .lintstagedrc.mjs
import path from 'path';

const lint = {
  '*.{js,jsx,ts,tsx}': (filenames) => {
    const filteredFiles = filenames
      .filter((file) => !file.includes(path.join('components', 'ui')))
      .map((f) => `"${path.relative(process.cwd(), f)}"`);

    if (filteredFiles.length === 0) return [];

    return [
      `eslint --fix ${filteredFiles.join(' ')}`,
      `prettier --write ${filteredFiles.join(' ')}`,
    ];
  },
  '*.{json,css,md}': ['prettier --write'],
};

export default lint;
