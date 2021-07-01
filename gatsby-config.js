module.exports = {
  siteMetadata: {
    title: `Engagement Wish coming soon`,
    description: `Custom natural diamond engagement rings like never seen before.`,
    author: `Sergio Olivares`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ew-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Crimson Text`,
          `source sans pro\:400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAq4XqOHkF05aTYj4_H9HJsvItfGaIoMPk",
          authDomain: "engagementwish.firebaseapp.com",
          databaseURL: "https://engagementwish.firebaseio.com",
          projectId: "engagementwish",
          storageBucket: "engagementwish.appspot.com",
          messagingSenderId: "847005360897",
          appId: "1:847005360897:web:094c276c8fc0c29714b100",
          measurementId: "G-8X4B2VNR3B",
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
