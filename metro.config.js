// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const config = getDefaultConfig(__dirname);

// ✅ DO NOT manually add babelTransformerPath here
// ✅ Reanimated’s wrapper handles this internally

module.exports = wrapWithReanimatedMetroConfig({
  ...config,
  resolver: {
    ...config.resolver,
    assetExts: [...config.resolver.assetExts, 'txt', 'bin', 'ttf', 'otf'],
  },
});
