module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@app': './src',
          '@interfaces': './src/interfaces',
          '@components': './src/components',
          '@services': './src/services',
          '@actions': './src/actions',
          '@hooks': './src/hooks',
          '@reducers': './src/reducers',
        },
      },
    ],
  ],
};
