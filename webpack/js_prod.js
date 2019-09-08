import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

export default () => ({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                screw_ie8: true,
            },
        }),
        new CompressionPlugin({
            test: /\.js$|\.css$/,
            threshold: 10240,
            minRatio: 0,
        }),
        new LodashModuleReplacementPlugin({
            collections: true,
            paths: true,
        }),
    ],
});