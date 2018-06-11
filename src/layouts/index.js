import React from "react";
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'
import icon from '../../static/favicon.ico'
import { css } from "emotion"
import { color } from "../assets/css/lib/variables"

class Template extends React.Component {
  render() {
    const { children, data } = this.props

    return(
      <div className="template-wrapper">
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <link rel="icon" type= "image/png" href={icon} />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119529640-1"></script>
          <script>
            {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-119529640-1');`}
          </script>
        </Helmet>
        <div className={css({backgroundColor: color.lightBlue})}>
          {children()}
        </div>
      </div>
    )
  }
}

export default Template

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
