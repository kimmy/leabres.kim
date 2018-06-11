import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";
import styled, { keyframes } from 'react-emotion'

import styles from "../assets/css/styles"
import variables from "../assets/css/lib/variables"

import BlinkingCaret from "../components/Typing"
import Colored from "../components/Colored"
import IconLink from "../components/IconLink"

import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import mail from "../assets/icons/mail.svg"

import { Github, LinkedIn, Mail } from "../assets/icons/icons"

class HomeIndex extends React.Component {

  render() {
    return (
      <div className={css(styles.flexCenter)}>
        <div>
          <div>
            <span className={css(styles.heading)}>Hi! I'm <Colored color={variables.color.blue}>Kim</Colored>.</span>
          </div>
          <div className={css(styles.displayGrid)}>
            <BlinkingCaret>And I'm a web developer.</BlinkingCaret>
          </div>
          <div className={css(styles.grid)}>
            <IconLink link="https://github.com/kbleabres"><Github className={css(styles.icon)} /></IconLink>
            <IconLink link="mailto:hello@leabres.kim"><Mail className={css(styles.icon)} /></IconLink>
            <IconLink link="https://linkedin.com/in/kimleabres"><LinkedIn className={css(styles.icon)} /></IconLink>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIndex
