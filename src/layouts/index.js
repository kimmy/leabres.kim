import React from "react";
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'

export default ({ children, data }) => (
  <div className="template-wrapper">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119529640-1"></script>
      <script>
        {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-119529640-1');`}
      </script>
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
