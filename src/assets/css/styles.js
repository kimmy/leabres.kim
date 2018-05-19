import React from "react";
import { injectGlobal } from "react-emotion";
import "./fonts.css"

injectGlobal`
  body {
    font-family: 'Lato', sans-serif;
  }
`;

const centerClass = `
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const heading = `
  font-size: 70px;
  font-family: 'Caveat', cursive;
`

const classes = {
  centerClass,
  heading
}

export default classes

