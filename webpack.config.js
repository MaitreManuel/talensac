
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const nodeModules = path.resolve(__dirname, 'node_modules');
const resources = path.resolve(__dirname, 'src/AppBundle/Resources');

const plugins = [
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/AppBundle/Resources/views/index.html"
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    }),
];
if (process.env.NODE_ENV === "production") plugins.push(new UglifyJsPlugin());

module.exports = {
    entry: {
        application: [
            "./src/AppBundle/Resources/application.js",
            "./src/AppBundle/Resources/assets/common.js"
        ],
    },
    output: {
        filename: "application.js",
        path: path.resolve(__dirname, "web/compiled")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }, {
                test: /\.s(a|c)ss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: [
                            path.resolve(resources , '/assets/'),
                            nodeModules
                        ]
                    }
                }]
            }, {
                test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    prefix: 'font/',
                    limit: 5000,
                    mimetype: 'application/font-woff'
                }
            }, {
                test: /\.(ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    prefix: 'font/'
                }
            }
        ]
    },
    plugins,
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "web/compiled"),
        compress: true,
        port: 9000
    },
};
