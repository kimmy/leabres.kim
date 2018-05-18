import React from "react";
import { css } from "emotion";
import styled, { keyframes } from 'react-emotion'
import styles from "../assets/css/styles.js"
import Typing from "../components/Typing.js"
import Colored from "../components/Colored.js"

const blue = 'rgba(33, 150, 243, 0.82)';

const HomeIndex = () => (
  <div className={css(styles.centerClass)}>
     <div>
       <span className={css(styles.heading)}>Hi! I'm <Colored color={blue}>Kim</Colored>.</span>
     </div>
     <div>
       <Typing>And I'm a web developer.</Typing>
     </div>
  </div>
)
export default HomeIndex
