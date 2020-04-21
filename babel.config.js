module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-classname-to-dynamic-style',
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
          '@types': './src/types',
          '@utils': './src/utils',
          '@styleguide': './src/styleguide',
          '@icons': './src/styleguide/icons',
        },
      },
    ],
  ],
};
