module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  module: {
    rules : [
      // CSS
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            },
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          'url-loader'
        ]

      }
    ]
  },
  mode: 'development',

  // webpack-dev-serverの設定
  devServer: {
    contentBase: '.',
    open: true
  },
}
