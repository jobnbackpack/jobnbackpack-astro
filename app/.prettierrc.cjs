module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    printWidth: 80,
    arrowParens: 'avoid',
    singleQuote: true,
    bracketSpacing: true,
    bracketSameLine: false,
    endOfLine: 'lf',
    semi: true,
    tabWidth: 4,
    trailingComma: 'all',
};
