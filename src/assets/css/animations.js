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

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 1px, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 2px, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-3px, 1px, 0);
  }

  40%, 60% {
    transform: translate3d(3px, 0px, 0);
  }
`
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { @include transform: rotate(360deg); }
`

const animations = { blink, typing, shake }

export default animations

