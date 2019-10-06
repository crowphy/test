const path = require('path');
const webpack = require('webpack');
//用于插入html模板
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除输出目录，免得每次手动删除
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, './index.js')
    },
    // mode: 'production',
    mode: 'development',
    devtool: 'cheap-module-souce-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[chunkhash:4].js',
        // libraryTarget: 'umd2'
    },
    module: {},
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({filename: 'index.html', template: 'index.html'}),
        //持久化moduleId，主要是为了之后研究加载代码好看一点。
        // new webpack.HashedModuleIdsPlugin(),
        // new webpack
        //     .optimize
        //     .CommonsChunkPlugin({name: 'manifest'})
    ]
};