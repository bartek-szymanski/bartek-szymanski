const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',

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

    devtool: 'source-map',
}