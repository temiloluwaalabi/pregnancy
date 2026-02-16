const path = require('path');

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro-config');

// Find the project and workspace roots
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// 2. Let Metro know where to resolve packages and node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 3. Resolve React and React Native from mobile app's node_modules
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    moduleName.startsWith('react') ||
    moduleName.startsWith('@react-native') ||
    moduleName.startsWith('@react-native-community') ||
    moduleName.startsWith('@brainbox')
  ) {
    const pathToResolve = path.resolve(projectRoot, 'node_modules', moduleName);
    return context.resolveRequest(context, pathToResolve, platform);
  }
  // Chain to the standard Metro resolver
  return context.resolveRequest(context, moduleName, platform);
};

// 4. Enable experimental features for better performance
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
    inlineRequires: true,
  },
});

module.exports = withNativeWind(config, { input: './app/globals.css' });
