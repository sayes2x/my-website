const newLocal = process.env.CONTENTFUL_SPACE_ID;
module.exports = {
  siteMetadata: {
    name: 'Scott A. Price',
    jobTitle: 'Front-End Developer',
    email: 'scott@scottaprice.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Krub\:500,700`
        ],
        display: 'swap'
      },
    },
  ],
}
