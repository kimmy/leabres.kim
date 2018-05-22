import React from "react";
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'

export default ({ children, data }) => (
  <div className="template-wrapper">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <link rel="icon" type="image/png" href="./favicon.ico"/>
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
);

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
