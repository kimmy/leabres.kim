import React from "react";
import { css } from "emotion";
import styled, { keyframes } from 'react-emotion'

import styles from "../assets/css/styles"
import variables from "../assets/css/lib/variables"

import Typing from "../components/Typing"
import Colored from "../components/Colored"
import IconLink from "../components/IconLink"

import { ReactComponent as Github } from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import mail from "../assets/icons/mail.svg"

const HomeIndex = () => (
  <div className={css(styles.centerClass)}>
     <div>
       <span className={css(styles.heading)}>Hi! I'm <Colored color={variables.color.blue}>Kim</Colored>.</span>
     </div>
     <div>
       <Typing>And I'm a web developer.</Typing>
     </div>
     <div className={css(styles.grid)}>
       <Github />
       {/* <IconLink link="https://github.com/kbleabres" svg={github}/> */}
       <IconLink link="mailto:hello@leabres.kim" svg={mail}/>
       <IconLink link="https://linkedin.com/in/kimleabres" svg={linkedin}/>
       {/* // contact info here */}
       {/* // linkedin */}
       {/* // mail? */}
     </div>
  </div>
)
export default HomeIndex
