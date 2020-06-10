const merge = require("webpack-merge");
const common = require("./webpack.common");

const dev = {
  mode: "development",
};

module.exports = merge(common, dev);
