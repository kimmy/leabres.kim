import { shake } from "./animations"
import { color } from "./lib/variables"
import { mq } from "./lib/breakpoints"

import "./fonts.css"

const flexCenter = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const heading = `
  font-size: 70px;
  font-family: 'Caveat', cursive;
  ${mq.xsmall(`
    font-size: 50px;
  `)};
`

const icon = `
  fill: ${color.text};
  stroke: ${color.text};
  width: 30px;
  :hover {
    .icon {
      fill: ${color.blue};
      stroke: ${color.blue};
    }
    animation: ${shake} 0.82s cubic-bezier(.22,.68,.84,.34) both;
  }
  ${mq.xsmall(`
    width: 25px;
  `)};
`

const grid = `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
`

const formGrid = `
  display: grid;
`

const displayGrid = `
  display: grid;
`
const card = `
  display: grid;
  justify-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #e2e2e2;
  margin: 10px;
`

const link = `
  line-height: 0;
  padding: 5px;
`

const classes = {
  flexCenter,
  heading,
  icon,
  grid,
  displayGrid,
  card,
  link,
}

export default classes

