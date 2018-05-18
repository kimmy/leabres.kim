import React from "react";
import styled, { keyframes } from 'react-emotion'

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

const animations = { blink, typing }

export default animations

