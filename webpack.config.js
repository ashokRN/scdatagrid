const path = require('path');
const MiniCssPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/index.ts',
    mode : "production",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader : "babel-loader",
                    options:{
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                },
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
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new MiniCssPlugin({filename : 'style.css'})]
};