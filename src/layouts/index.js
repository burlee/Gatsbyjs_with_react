import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.scss'
import Hero from '../components/Hero/Hero';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'This is a sample website for the Gatsby crash course',
        },
        { name: 'keywords', content: 'Gatsby post blog' },
      ]}
    />
    <div>
      <Hero/>
      <WhatWeOffer/>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`