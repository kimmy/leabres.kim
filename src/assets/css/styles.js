import React from "react";
import { injectGlobal } from "react-emotion";
import variables from "./lib/variables"
import "./fonts.css"

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

const icon = `
  width: 30px;
`

const grid = `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const classes = {
  centerClass,
  heading,
  icon,
  grid
}

export default classes

