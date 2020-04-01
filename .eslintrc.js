module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['css-modules'],
  extends: ['@react-native-community', 'plugin:css-modules/recommended'],
};
