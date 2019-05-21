const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: path.join(__dirname,'src','main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist'),
    },
    module:{
        rules:[
            { 
              test:/\.scss$/,
              use: [
                  'style-loader', 
                  {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                  },
                ], 
            },
        ],
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname,'src','index.html'),
        }),
    ],
};
