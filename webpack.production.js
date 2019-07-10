const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry: path.join(__dirname,'src','main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist'),
    },
    module:{
        rules:[
            { 
              test:/\.scss$/,
              use: ['style-loader', 'css-loader','sass-loader'],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif)$/,
                use:[
                    {
                      loader: 'file-loader',
                      options: {
                        name:'[name].production.[ext]',
                      },
                    },
                ], 
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new htmlPlugin({
            template: path.join(__dirname,'src','index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
};

