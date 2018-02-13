const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./web/src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SBAB',
      filename: 'index.html',
      hash: true,
      template: 'web/src/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/web/dist',
    publicPath: '/web/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './web/dist',
    hot: true,
    inline: true
  },
  watch: true
};
