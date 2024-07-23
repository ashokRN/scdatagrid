const path = require('path');
const MiniCssPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/index.ts',
    mode : "production",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssPlugin.loader, "css-loader"],
            },
        ],
    },
    externals: {
        "react": "react"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    output: {
        libraryTarget: 'commonjs',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new MiniCssPlugin({filename : 'style.css'})]
};