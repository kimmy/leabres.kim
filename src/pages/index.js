import React from "react";
import { css } from "emotion";
import styled, { keyframes } from 'react-emotion'

import styles from "../assets/css/styles"
import variables from "../assets/css/lib/variables"

import Typing from "../components/Typing"
import Colored from "../components/Colored"

const HomeIndex = () => (
  <div className={css(styles.centerClass)}>
     <div>
       <span className={css(styles.heading)}>Hi! I'm <Colored color={variables.color.blue}>Kim</Colored>.</span>
     </div>
     <div>
       <Typing>And I'm a web developer.</Typing>
     </div>
  </div>
)
export default HomeIndex
