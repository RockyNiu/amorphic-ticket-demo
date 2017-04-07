var path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    // Angular 2 stuff
    entry: {
        //vendor: './bundle/vendor.ts'
        bundle: './apps/ticket/public/js/index.ts',
        start: './apps/ticket/public/vue/main.ts'
    },
    // Amorphic
    //entry: './apps/ticket/public/js/index.ts',
    output: {
        filename: '[name].js',
        //filename: 'bundle.js',
        path: '/'
    },
    module: {
        rules: [
            // Angular 2 stuff
            // {
            //     test: /\.tsx?$/,
            //     loader: ['ts-loader', 'angular2-template-loader']
            // },

            // Amorphic
            //{
            //    test: /\.tsx?$/,
            //    loader: 'ts-loader'
            //},

            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader'
            // },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'image-loader',
            //     query: {
            //         limit: 10000,
            //         name: '[name].[ext]?[hash:7]'
            //     }
            // },
            // Vue stuff
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                    loaders: {
                    //     // you need to specify `i18n` loaders key with `vue-i18n-loader` (https://github.com/kazupon/vue-i18n-loader)
                        i18n: '@kazupon/vue-i18n-loader'
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options:{appendTsSuffixTo: [/\.vue$/]}
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", '.vue'],
        alias: {
            amorphic: path.resolve(__dirname, './node_modules/semotus/index.js'),
            'vue$': path.resolve(__dirname, './node_modules/vue/dist/vue.common.js'),
            'components': path.resolve(__dirname, '../apps/ticket/public/vue/components')
        }
    },
    // resolve: {
    //     extensions: ['', '.js', '.vue', '.ts'],
    //     fallback: [path.join(__dirname, '../node_modules')],
    //     alias: {
    //         'vue$': 'vue/dist/vue.common.js',
    //         'src': path.resolve(__dirname, '../src'),
    //         'assets': path.resolve(__dirname, '../src/assets'),
    //         'components': path.resolve(__dirname, '../src/components')
    //     }
    // },
    // resolveLoader: {
    //     fallback: [path.join(__dirname, '../node_modules')]
    // },
    devtool: 'inline-source-map'
};