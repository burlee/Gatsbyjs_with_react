module.exports = {
  siteMetadata: {
    title: 'Seweryn Kimla',
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-sass`, `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
  
}
