module.exports = {
    entry: './react_minesweeper.jsx', //UPDATE ENTRY FILE//
    output: {
      filename: './bundle.js',
    },
    module: {
      rules: [
        {
          test: [/\.jsx?$/],
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          },
        }
      ]
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '*']
    }
  };
  