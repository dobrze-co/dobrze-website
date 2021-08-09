/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-netlify",
    "gatsby-plugin-layout",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-smoothscroll",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NBHMXM4",
        routeChangeEventName: "route-change",
      },
    },
  ],
}
