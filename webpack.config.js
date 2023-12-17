const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: [
            path.resolve(__dirname, 'src/main.js'),
            path.resolve(__dirname, 'src/style.scss'),
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }

        ]
    },
    plugins: [new miniCssExtractPlugin()]
}