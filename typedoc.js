module.exports = {
    src: [
        './src/as-array.ts',
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './doc',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: 'readme.md',
    name: 'as-array',
    ignoreCompilerErrors: true,
    plugin: 'none',
    listInvalidSymbolLinks: true,
    theme: 'markdown'
};
