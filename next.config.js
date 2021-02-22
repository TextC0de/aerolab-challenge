const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = withPlugins([
    [withBundleAnalyzer]
], {
    webpack: (config) => {
        config.plugins.push(new DuplicatePackageCheckerPlugin())
        config.resolve.alias['fast-deep-equal'] = path.resolve(
          __dirname,
          'node_modules',
          'fast-deep-equal'
        )
        return config
    },
    basePath: isDev ? '' : '/aerolab-challenge',
    poweredByHeader: false,
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    env: {
        NEXT_PUBLIC_HOST: isDev
            ? 'http://localhost:3000'
            : 'https://textcode.me/aerolab-challenge',
        NEXT_PUBLIC_ANALYITICS_ID: isDev ? '' : ''
    },
    images: {
        domains: ['textcoe.me']
    }
})