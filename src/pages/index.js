import React from "react";
import { css, cx } from "emotion";
import styled, { keyframes } from 'react-emotion';

import styles from "../assets/css/styles";
import { color } from "../assets/css/lib/variables";

import BlinkingCaret from "../components/Typing";
import Colored from "../components/Colored";
import IconLink from "../components/IconLink";
import Link from "gatsby-link";

import { Github, LinkedIn, Mail } from "../assets/icons/icons";

class HomeIndex extends React.Component {

  render() {
    return(
      <div className={cx(css(styles.flexCenter))}>
        <div>
          <div className={css(styles.card)}>
            <div>
              <span className={css(styles.heading)}>Hi! I'm <Colored color={color.blue}>Kim</Colored>.</span>
            </div>
            <div className={css(styles.displayGrid)}>
              <BlinkingCaret>And I'm a web developer.</BlinkingCaret>
            </div>
          </div>
          <div className={css(styles.grid)}>
            <IconLink link="https://github.com/kbleabres" target='true'><Github className={css(styles.icon)} /></IconLink>
            <Link to="/contact" className={css(styles.link)}><Mail className={css(styles.icon)} /></Link>
            <IconLink link="https://linkedin.com/in/kimleabres" target='true'><LinkedIn className={css(styles.icon)} /></IconLink>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIndex
