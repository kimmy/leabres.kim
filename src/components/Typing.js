import React from "react"
import styled from "react-emotion"
import animations from "../assets/css/animations.js"

const BlinkingCaret = styled('div')`
  display: inline-block;
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    ${animations.blink} 1s step-end infinite;
`


export default BlinkingCaret
