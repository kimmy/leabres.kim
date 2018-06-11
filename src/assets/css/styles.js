import { shake } from "./animations"
import "./fonts.css"

const breakpoints = {
  xsmall: 480,
  small: 736,
  medium: 980,
  large: 1280,
  xlarge: 1800,
}

const mq = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
    let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
    accumulator[label] = cls =>
      `@media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {}
)

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
  width: 30px;
  :hover {
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

const displayGrid = `
  display: grid;
`

const classes = {
  flexCenter,
  heading,
  icon,
  grid,
  displayGrid
}

export default classes

