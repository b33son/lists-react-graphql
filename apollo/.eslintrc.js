module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    'react/no-did-mount-set-state': 0,
    'no-underscore-dangle': 0,
    'brace-style': [2, 'allman'],
    'no-return-assign': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'react/prefer-stateless-function': 0,
    // 'no-tabs': 0,
    // 'react/prop-types': 0,
    // 'react/jsx-indent': [2, 'tab'],
    // 'react/jsx-indent-props': [2, 'tab'],
    // 'react/jsx-first-prop-new-line': ['error', 'always'],
  },
};
