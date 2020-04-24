let plugins = [
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    },
    'vant'
  ],
  '@babel/plugin-proposal-optional-chaining', // 支持?.可选链操作符
  '@babel/plugin-proposal-nullish-coalescing-operator' // 支持??空值合并运算符
];

if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console'); // 移除console
  plugins.push('transform-remove-debugger'); // 移除的bugger
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
};
