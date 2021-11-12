const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode: 'development',

    plugins: [new MiniCssExtractPlugin()],
    
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,

                // Create CSS file 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

    ],

    devtool: 'source-map',
}