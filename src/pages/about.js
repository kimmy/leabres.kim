import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class About extends React.Component {
    render() {
        // const siteTitle = this.props.data.site.siteMetadata.title
        // const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
              {/* <Helmet> */}
              {/*   <title>{siteTitle}</title> */}
              {/*   <meta name="description" content={siteDescription} /> */}
              {/* </Helmet> */}
              {/*  */}
              <div id="main">
              </div>
            </div>
        )
    }
}

export default About
//
// export const pageQuery = graphql`
//     query PageQuery {
//         site {
//             siteMetadata {
//                 title
//                 description
//             }
//         }
//     }
// `
