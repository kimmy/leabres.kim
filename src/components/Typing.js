import React from "react"
import styled from "react-emotion"
import animations from "../assets/css/animations.js"

const Typing = styled('div')`
  display: inline-block;
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    ${animations.typing} 2.5s steps(30, end),
    ${animations.blink} 1s step-end infinite;
`

export default Typing
