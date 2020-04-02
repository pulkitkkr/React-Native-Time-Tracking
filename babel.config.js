module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-classname-to-style',
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['scss', 'sass'],
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@scenes': './src/scenes',
          '@context': './src/context',
          '@navigations': './src/navigations',
          '@api': './src/api',
          '@styleguide': './src/styleguide',
          '@icons': './src/styleguide/icons',
        },
      },
    ],
  ],
};
