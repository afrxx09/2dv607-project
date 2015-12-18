var config = {
    entry: {
        js: [
          './src/index.jsx'
        ]
    },
    externals: [
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-router': {
                root: 'ReactRouter',
                commonjs2: 'react-router',
                commonjs: 'react-router',
                amd: 'react-router'
            }
        }
    ],
    output: {
        path: './lib',
        filename: 'AsdNav.js',
        library: 'AsdNav',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname,
    },
};

module.exports = config;