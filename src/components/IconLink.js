import React from "react";
import { css } from "emotion";
import styles from "../assets/css/styles";

const IconLink = (props) => (
  <a href={props.link} target="_blank">
    <img src={props.svg} width='30'/>
  </a>
)

export default IconLink


