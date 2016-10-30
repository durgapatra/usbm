
module.exports = {
    entry: [
        './jsx/app.jsx'
    ],
    output: {
        path: "./public",
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch:true
}