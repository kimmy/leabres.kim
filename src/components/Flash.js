import React, { SFC } from "react";
import { color } from "../assets/css/lib/variables";
import { mq } from "../assets/css/lib/breakpoints";
import styled from "react-emotion";

const successMessage = "Message sent! Thank you!"
const errorMessage = "Oops. Something went wrong!"

const Flash = styled('div')`
  text-align: center;
  padding: 15px;
  color: ${(props => (props.state) ? color.infoText : color.errorText )};
  background-color: ${(props => (props.state) ? color.infoBg : color.errorBg )};
  border-radius: 5px;
  box-shadow: 0 3px 10px 2px #3062934a;
  margin-bottom: 20px;
  margin-top: -20px;
`

const FlashComponent = ({ success }) => (
  <Flash state={success}>
    { success ? successMessage : errorMessage }
  </Flash>
)

export default FlashComponent
