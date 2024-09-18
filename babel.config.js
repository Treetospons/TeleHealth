module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/hooks': './src/hooks',
          '~/navigations': './src/navigations',
          '~/screens': './src/screens',
          '~/services': './src/services',
          '~/states': './src/states',
          '~/styles': './src/styles',
          '~/types': './src/types',
          '~/utils': './src/utils',
        },
      },
    ],
  ],
};
