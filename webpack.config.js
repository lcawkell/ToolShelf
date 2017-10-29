const path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

module.exports = {
    entry: {
        './ToolShelf':'./src/ToolShelf.tsx'
    },
    output: {
        filename: "[name].js",
        path: "T:\\"
    },


    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        'loaders': [
            // ts-loader: convert typescript (es6) to javascript (es6),
            // babel-loader: converts javascript (es6) to javascript (es5)
            {
              'test': /\.tsx?$/,
              'loaders': ['babel-loader','awesome-typescript-loader'],
              'exclude': [/node_modules/,nodeModulesPath]
            },
            // babel-loader for pure javascript (es6) => javascript (es5)
            {
              'test': /\.(jsx?)$/,
              'loaders': ['babel'],
              'exclude': [/node_modules/,nodeModulesPath]
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    watch: true
    
}