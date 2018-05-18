import React from "react";
import { css } from "emotion";
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'react-emotion'

// const siteTitle = this.props.data.site.siteMetadata.title
// const siteDescription = this.props.data.site.siteMetadata.description

const latoFont = css({
  fontFamily: 'Lato, sans-serif',
})

const tempClass = css({
  margin: '0 auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
})
const heading = css({
  fontSize: '70px',
  fontFamily: 'Caveat, cursive',
})

const Blue = styled('span')({
  color: 'rgba(33, 150, 243, 0.82)',
})

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

const Typing = styled('div')`
  display: inline-block;
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    ${typing} 2.5s steps(30, end),
    ${blink} 1s step-end infinite;
`

const HomeIndex = ({data}) => (
  <div className={tempClass}>
     <Helmet>
       <title>{data.site.siteMetadata.title}</title>
       {/* <meta name="description" content={siteDescription} /> */}
     </Helmet>
     <div>
       <span className={heading}>Hi! I'm <Blue>Kim</Blue>.</span>
     </div>
     <div className={latoFont}>
       <Typing>And I'm a web developer.</Typing>
     </div>
  </div>
)
export default HomeIndex
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
