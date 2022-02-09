require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dáša & Vlastík`,
    description: `Our wedding website.`,
    author: `@theskupi`,
    siteUrl: `https://bude.party`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:300,400,400i,700`,
          // `source sans pro\:300,400,400i,700`
        ],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-7WYTGVYZC1",
        head: true,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.AIRTABLE_API}`,
        tables: [
          {
            baseId: `appKy6aA4FaeDVl3g`,
            tableName: `svatebni_formular`,
          },
        ],
      },
    },
  ],
}
