import { injectGlobal } from "react-emotion";

const LatoBlackTTF = "../fonts/Lato-Black.ttf";
const CaveatRegularTTF = "../fonts/Caveat-Regular.ttf";

injectGlobal`
  body {
    font-family: 'Lato', sans-serif;
  }

  @font-face {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    src: local("Lato Black"), local("Lato-Black"), url(${LatoBlackTTF}) format("ttf");
  }

  @font-face {
    font-family: "Caveat", cursive;
    font-style: normal;
    font-weight: 400;
    src: local("Caveat Regular"), local("Caveat-Regular"), url(${CaveatRegularTTF}) format("ttf");
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

