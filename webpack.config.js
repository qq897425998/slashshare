var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.export = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        path: __dirname + "build",
        filename: "bundle.js"
    },
    resove: {
        extension: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.less$/, exclude: /node_modules/, loader: 'style!clss!postcss!less'},
            {test: /\.css$/, exclude: /node_modules/, loader: 'url-loader?limit=5'},
            // {test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000'},
            // {test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,loader:'url-loader?limit=5000'},
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    },
    postcss: [
        //调用autoprefixer插件，例如 display: flex
        require('autoprefixer')
    ],
    plugins: [

        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:80'
        }),

        // 在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    devServer: {
        proxy: {
            '/api': { //凡是匹配 `/api`http请求路径 都会被代理到localhost:5000(为解决fetch的跨域问题)
                target: 'http://localhost:5000',
                secure: false
            }
        },
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
        port: 80
    },
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
}
