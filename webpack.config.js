const path = require('path');

module.exports = {
    entry: path.join(__dirname,'./ejemplo_webpack/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'./dist'),
    },
};
