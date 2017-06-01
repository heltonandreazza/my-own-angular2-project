var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app/main.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
                test: /\.html$/,
                loaders: ['html-loader'] //extract html code
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader'] //simply extract css the way it is, no transforms
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};