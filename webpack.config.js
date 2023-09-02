const path = require('path');
const webpack = require('webpack');
const CssExtractPlugin = require('mini-css-extract-plugin');
const { GriffelCSSExtractionPlugin } = require('@griffel/webpack-extraction-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => [
    {
        name: 'lib',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: {
                type: 'umd',
                name: {
                    commonjs: '@codedojo/ui'
                }
            },
            globalObject: 'this'
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts|tsx)$/,
                    // Apply "exclude" only if your dependencies **do not use** Griffel
                    exclude: /node_modules/,
                    use: {
                        loader: GriffelCSSExtractionPlugin.loader,
                    },
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(s*)css$/,
                    use: [
                        CssExtractPlugin.loader,
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
                {
                    test: /\.svg/,
                    issuer: /\.(s*)css$/,
                    type: 'asset/inline'
                },
                {
                    test: /\.svg$/,
                    issuer: /\.tsx?$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        },
                        {
                            loader: 'react-svg-loader',
                            options: {
                                svgo: {
                                    plugins: [
                                        { removeViewBox: false }
                                    ]
                                }
                            }
                        }
                    ]
                }
            ]
        },
        devtool: argv.mode === 'production' ? 'source-map' : 'eval',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(argv.mode),
            }),
            new CssExtractPlugin({
                filename: 'index.css'
            }),
            new GriffelCSSExtractionPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve('./node_modules/@fluentui/react-theme-sass/sass'),
                        to: path.resolve('./dist/sass')
                    },
                    {
                        from: path.resolve('./src/index.scss')
                    }
                ]
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src/')
            }
        },
        externals: {
            'react': {
                root: 'React',
                commonjs: 'react',
                commonjs2: 'react',
                module: 'react'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                module: 'react-dom'
            }
        }
    },
    {
        name: 'demo',

        entry: './demo/index.tsx',

        output: {
            path: path.resolve(__dirname, 'demo'),
            filename: 'index.js'
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(s*)css$/,
                    use: [
                        CssExtractPlugin.loader,
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
                {
                    test: /\.svg/,
                    type: 'asset/inline'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(argv.mode)
            }),
            new CssExtractPlugin({
                filename: 'index.css'
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@codedojo/ui': path.resolve(__dirname, 'dist/')
            }
        }
    }
];