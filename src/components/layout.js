import React from "react";
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'
import icon from '../../static/favicon.ico'
import { StaticQuery, graphql } from "gatsby"
import { cache } from 'emotion'
import { CacheProvider } from '@emotion/core'

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query PageQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <CacheProvider value={cache}>
          <div className="template-wrapper">
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content={data.site.siteMetadata.description} />
              <link rel="icon" type="image/png" href={icon} />

              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119529640-1"></script>
              <script>
                {` window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-119529640-1');
                `}
              </script>
            </Helmet>
            <div>
              {children}
            </div>
          </div>
        </CacheProvider>
      )}
    />
  )
}
