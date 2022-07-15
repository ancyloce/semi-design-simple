const path = require(`path`);
const CracoEsbuildPlugin = require('craco-esbuild');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function ({ env }) {
    const isProductionBuild = process.env.NODE_ENV === 'production';
    const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE ? 'server' : 'json';
    const plugins = [];

    if (isProductionBuild) {
        plugins.push(new BundleAnalyzerPlugin({ analyzerMode }));
    }

    return {
        webpack: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
            plugins,
        },
        plugins: [{ plugin: CracoEsbuildPlugin }],
    };
};
