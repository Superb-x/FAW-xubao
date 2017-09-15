const path = require("path")
const webpack = require('webpack')  

module.exports = {
    entry: [
        'react-hot-loader/patch',              //开启热替换
        'webpack-hot-middleware/client',       //有变化时，console会提示
        path.join(__dirname, '../src/index.js')// 入口文件
    ],
    output: {
        filename: 'bundle.js', // 打包后的文件名
        chunkFilename: '[name].[chunkhash:5].js',
        path: path.join(__dirname, '/dist'), // 打包后的文件存储位置
        publicPath: '/'
    },

    resolve: {
        modules: [path.join(__dirname, '../node_modules')], // 优化webpack文件搜索范围
        extensions: ['.web.js', '.jsx', '.js', '.json'],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },

    devtool: 'cheap-module-eval-source-map', // 开启生成source-map文件功能便于代码调试

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader?cacheDirectory'], // 开启编译缓存
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'   //将JS代码生成style标签插入到head标签中
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]-[hash:base64:6]'   //也可以用快捷方法，直接将参数放在'?'后面
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass)/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader?&modules&localIdentName=[local]-[hash:base64:6]', //参数直接写在行内，当然也可以单独抽取出来
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|mp4|webm|otf|webp)$/,
                loader: 'url-loader',
                query: {
                    limit: 10240,
                    name: 'img/[name].[ext]'   //可以参考Vue脚手架的配置
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
            }
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),//报错时不退出webpack进程
        new webpack.HotModuleReplacementPlugin(),//代码热替换
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'//用于区分开发和生产环境
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/vendor-mainfest.json')//引入预打包好的第三方库的映射文件
        }),
    ],
}