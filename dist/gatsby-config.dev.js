"use strict";

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: "gatsby-plugin-sass",
    options: {
      postCssPlugins: [require("tailwindcss")]
    }
  }]
};