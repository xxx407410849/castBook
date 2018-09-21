const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
const extractLess = new ExtractTextPlugin({
    filename: "stylesheets/[name].css",
    ignoreOrder : true
});
const extractCss = new ExtractTextPlugin({
    filename: "stylesheets/[name]-css.css",
    ignoreOrder : true
})
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './package.jsx'),
    devtool: 'inline-source-map',
    devServer: {
        port: 8086,
        historyApiFallback : true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].js",
        chunkFilename: 'js/[name].chunk.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    fallback : 'style-loader',
                    use: [
                        {loader : 'css-loader' , options : { importLoaders: 2 , autoprefixer : false}},
                        {loader: 'postcss-loader'},
                        {loader : 'less-loader' , options : { relativeUrls : true}}
                    ]

                })
            },
            {
                test: /\.css$/,
                use: extractCss.extract({
                    fallback : 'style-loader',
                    use: [
                        {loader : 'css-loader' , options : { importLoaders: 1 , autoprefixer : false}},
                        {loader: 'postcss-loader'},
                    ]
                })
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[md5:hash:hex:7].[ext]'
                    }
                }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [
                            'syntax-dynamic-import'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        extractLess,
        extractCss,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'view/index.html',
            template:  path.resolve(__dirname, './IndexPage.html')
        })
    ]
}