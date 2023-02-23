const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  mode: 'production',
  plugins: [
    new Dotenv()
  ],
  output: {
    filename: 'bundle.js', // Replace with your desired output file name
    path: path.resolve(__dirname, 'dist'), // Replace with your desired output directory
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify")
    },
  },
};
