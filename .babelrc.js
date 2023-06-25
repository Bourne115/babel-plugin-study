// 因为 babel 中插件的应用顺序是：先 plugin 再 preset，plugin 从左到右，preset 从右到左，
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '30',
        },
        debug: true,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    [
      '@babel/transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
}
