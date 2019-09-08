import CleanWebpackPlugin from 'clean-webpack-plugin';
import ProgressBar from 'progress-bar-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import devServer from './webpack/devserver';
import babel from './webpack/babel';
import jsProd from './webpack/js_prod';
import extractCSS from './webpack/css.extract';
import sass from './webpack/sass';
import files from './webpack/files';

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build'),
};

function config() {
    return merge([
        {
            entry: {
                index: `${PATHS.source}/js/index.js`,
            },
            output: {
                path: PATHS.build,
                filename: 'index.js',
            },
            devtool: '#cheap-module-source-map',
            plugins: [
                new ProgressBar(),
                new CleanWebpackPlugin(['build']),
                new HtmlWebpackPlugin({
                    filename: 'index.html',
                    chunks: 'index',
                    template: `${PATHS.source}/index.html`,
                }),
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    _: 'lodash',
                }),
            ],
        },
        babel(),
        files(),
    ]);
}

export default (env) => {
    if (env === 'production') {
        return merge([
            config(),
            extractCSS(),
            jsProd(),
        ]);
    }

    if (env === 'development') {
        return merge([
            config(),
            devServer(),
            sass(),
        ]);
    }

    return false;
};