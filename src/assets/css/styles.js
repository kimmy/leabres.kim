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
`

const icon = `
  width: 30px;
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

