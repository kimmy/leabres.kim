import { color } from "./lib/variables";
import { mq } from "./lib/breakpoints";
import { ring } from "./animations";

const page = `
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='968' height='116.2' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23edf1ff' stroke-width='2.4' stroke-opacity='0.42'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
`
const grid = `
  display: grid;
  grid-gap: 0.5em;
  grid-template-areas:
    "name name email email"
    "subject subject subject subject"
    "message message message message"
    "loader . . submit";
  grid-template-columns: 1fr 1fr 0.5fr 1.5fr;
`
const card = `
  background-color: white;
  border-radius: 0 5px 5px 0;
  border-left: 4px solid ${color.blue};
  box-shadow: 0 0 6px 0 hsla(0, 0%, 0%, 0.2);
  margin: 30px;
`
const heading = `
  text-align: center;
  padding: 15px;
`
const flash = `
  text-align: center;
  padding: 15px;
  color: #2f6293;
  background-color: #9cd0fa;
  border-radius: 5px;
  box-shadow: 0 3px 10px 2px #3062934a;
  margin-bottom: 20px;
  margin-top: -20px;
`
const name = `
  grid-area: name;
`
const email = `
  grid-area: email;
`
const subject = `
  grid-area: subject;
`
const message = `
  grid-area: message;
`
const submit = `
  grid-area: submit;
  input {
    cursor: pointer;
    border-radius: 3px;
    color: white;
    border: 0;
    box-shadow: 0 0px 5px 0 hsla(0, 0%, 45%, 0.4);
    background: linear-gradient(to bottom,
                rgba(33,150,243,0.4),
                rgba(33,150,243,0.6));
    :hover:not([disabled]) {
      box-shadow: inset 0 0px 5px 0 hsla(0, 0%, 45%, 0.2);
    }
    :disabled {
      cursor: auto;
      background: ${color.text}
    }
  }
`
const content = `
  padding: 20px;
`
const loader = `
  grid-area: loader;
  display: flex;
  justify-content: center;
  :after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: ${color.blue} transparent ${color.blue} transparent;
    animation: ${ring} 1.2s linear infinite;
  }
`

const formStyles = {
  grid,
  card,
  heading,
  flash,
  name,
  email,
  subject,
  message,
  submit,
  content,
  page,
  loader,
}

export default formStyles
