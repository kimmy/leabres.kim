module.exports = {
  siteMetadata: {
    title: "Kim Leabres | Web Developer",
    description: "Kim Leabres' personal website",
    siteUrl: "http://leabres.kim",
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119529640-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ],
}
