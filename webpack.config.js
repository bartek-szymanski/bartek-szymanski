const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,

                // Create CSS file 
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },

    devtool: 'source-map',
}