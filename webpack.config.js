const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'), // absolute path
            filename: 'bundle.js'
        },
        mode: 'development',
        module: {
            rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'), // absolute path
            port: 3000,
            historyApiFallback: true
        }
    }
};