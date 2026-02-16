const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Disable line length restrictions for body and footer
    'body-max-line-length': [0, 'always'],
    'footer-max-line-length': [0, 'always'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'ci',
        'chore',
        'docs',
        'ticket', // Your custom type
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
      ],
    ],
  },
};

export default commitlintConfig;
