var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./src/lib/index.js',
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'http://www.baidu.com',
        filename:'vue-msgbox-micro.js',
        libraryTarget: "umd",
        library: 'VueMsgbox'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
                query:{
                    presets:['env']
                }
            },
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader',
                include:path.join(__dirname,'src/assets/css/'),
                exclude:/node_modules/,
            },{
                test:/\.(woff|svg|eot|ttf)\??.*$/,
                loader:'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]',
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
                options:{
                    loaders:{
                        scss:'style-loader!css-loader!postcss-loader!sass-loader'
                    },
                    extractCSS: true
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("index.css")
    ]
}