module.exports = {
  extends: ['airbnb', 'plugin:css-modules/recommended'],
  parser: 'babel-eslint',
  plugins: ['css-modules'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
  },
  settings: {
    'import/core-modules': ['metro-config'],
  },
  rules: {
    'no-use-before-define': 'off',
    'react/tsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  globals: {
    fetch: false,
  },
};
