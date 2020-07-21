const path = require("path");

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
};
