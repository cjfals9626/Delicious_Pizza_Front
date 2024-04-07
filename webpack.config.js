const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const wPackConfig = {
    mode: 'development',
    entry: {
        main: './src/test/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/, //가져올 파일에 대한 정규 표현식
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //사용할 로더 이름
            },
            {
                test: /\.(png|jpg)$/, //가져올 파일에 대한 정규 표현식
                use: [{
                    loader: 'file-loader', //사용할 로더 이름
                    options: {
                        name: '[name].[ext]?[hash]' //이미지 파일의 이름
                    }
                
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new HtmlWebpackPlugin({
            template: './src/test/index.html'   //템플릿 파일 위치
        }),
        new CleanWebpackPlugin() //빌드시 dist 폴더 내용 삭제
    ],
};

module.exports = wPackConfig;