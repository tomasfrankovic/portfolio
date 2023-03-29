// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    outputDir : './dist',
    publicPath: process.env.NODE_ENV === "production" ? "gh-pages" : "/",
  }