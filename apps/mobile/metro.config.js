const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro-config");
const path = require("path");

// 1. Find the project and workspace directories
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// 2. Force Metro to watch the Root node_modules and Shared Packages
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// 3. Ensure we can import from /packages folder later
config.resolver.disableHierarchicalLookup = true;

module.exports = withNativeWind(config, { input: "./app/global.css" });