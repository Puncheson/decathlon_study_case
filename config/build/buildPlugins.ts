

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { IBuildOptions } from './types/config';

export function buildPlugins({paths}:IBuildOptions): webpack.WebpackPluginInstance[] {
    return [ 
        new  HtmlWebpackPlugin({
            template: paths.html,
            favicon: "./src/favicon.svg"
        }), 
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',


        })
    ]
}