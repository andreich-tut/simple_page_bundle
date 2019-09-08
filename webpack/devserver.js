import address from './address';

export default () => ({
    devServer: {
        host: address.ip,
        port: address.port,
        disableHostCheck: true,
        hot: true,
        noInfo: true,
        inline: true,
        watchOptions: {
            ignored: /node_modules/,
        },
    },
});