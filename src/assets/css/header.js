import { color } from "./lib/variables"

const grid = `
  position: fixed;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${color.light}
`

const lineHeight = `
  line-height: 0;
`

const link = `
  text-decoration: none;
  color: ${color.blue};
  :hover {
    color: ${color.text};
  }
`

const center = `
  justify-self: center;
`

export default { grid, lineHeight, center, link }
