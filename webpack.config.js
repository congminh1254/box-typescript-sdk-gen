const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
	// Browser build
	{
		target: "web", // Build for the web environment (browser)
		entry: "./src/index.ts",
		output: {
			filename: "bundle.browser.js",
			path: path.resolve(__dirname, "dist"),
			library: "box-typescript-sdk-gen",
			libraryTarget: "umd", // UMD format allows compatibility across Node, AMD, and CommonJS
		},
		resolve: {
			extensions: [".ts", ".js"],
			extensionAlias: {
				".js": [".js", ".ts"],
				".cjs": [".cjs", ".cts"],
				".mjs": [".mjs", ".mts"],
			},
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
			],
		},
		optimization: {
			minimize: false,
		},
	},

	// Node build
	{
		target: "node",
		entry: "./src/index.ts",
		output: {
			filename: "bundle.js", 
			path: path.resolve(__dirname, "dist"),
			library: "box-typescript-sdk-gen",
			libraryTarget: "commonjs",
		},
		externals: [nodeExternals()],
		resolve: {
			extensions: [".ts", ".js"],
			extensionAlias: {
				".js": [".js", ".ts"],
				".cjs": [".cjs", ".cts"],
				".mjs": [".mjs", ".mts"],
			},
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
			],
		},
		optimization: {
			minimize: false,
		},
	},
];
