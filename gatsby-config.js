/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "dobrze.",
    titleTemplate: "dobrze. · %s",
    description:
      "Branding, marketing, procesy sprzedaży zrobione dobrze. Audyt komunikacji, optymalizacja procesów sprzedaży w IT.",
    url: "https://dobrze.co",
    image: "/images/share.jpg",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-netlify",
    "gatsby-plugin-layout",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-react-helmet",
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
