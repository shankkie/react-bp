const webpackMerge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge( baseConfig, {
    mode: "production",
    plugins: [ new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    })]
});
