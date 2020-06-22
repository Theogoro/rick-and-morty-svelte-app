const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const entry = {
  index: path.join(__dirname, "src/index.js"),
};

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js",
  },
  devServer: {
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.svelte$/i,
        use: "svelte-loader",
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      title: "Rick and Morty - Svelte",
      chunks: ["index"],
      favicon: "src/assets/images/favicon.png",
    }),
  ],
};
