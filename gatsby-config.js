module.exports = {
  siteMetadata: {
    title: "Kim Leabres | Web Developer",
    description: "The personal website of Kim Leabres, a Ruby on Rails developer.",
    siteUrl: "http://leabres.kim",
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119529640-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
