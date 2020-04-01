module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
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
