module.exports = {
    presets: ['@babel/preset-typescript', '@babel/preset-env'],
    plugins: [
        '@babel/plugin-transform-runtime',
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@': './src',
                },
            },
        ],
    ],
}
