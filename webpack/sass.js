import path from 'path';

export default paths => ({
    module: {
        rules: [
            {
                test: /(\.css|\.scss)$/,
                include: paths,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            root: path.resolve(__dirname, './source'),
                        },
                    }, {
                        loader: 'sass-loader',
                        options: {
                            data: '@import "./source/scss/vars";',
                            includePaths: [
                                path.resolve(__dirname, './source'),
                            ],
                        },
                    },
                ],
            },
        ],
    },
});