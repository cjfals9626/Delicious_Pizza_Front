const path = require('path');

const wPackConfig = {
    mode: 'development',
    entry: {
        main: './src/test/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    }
};

module.exports = wPackConfig;