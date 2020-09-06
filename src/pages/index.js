import React from "react";
import { css } from "@emotion/core";

import styles from "../assets/css/styles"
import variables from "../assets/css/lib/variables"

import BlinkingCaret from "../components/Typing"
import Colored from "../components/Colored"
import IconLink from "../components/IconLink"
import Layout from "../components/layout"

import { Github, LinkedIn, Mail } from "../assets/icons/icons"

class HomeIndex extends React.Component {

  render() {
    return (
      <Layout>
        <div css={css(styles.flexCenter)}>
          <div>
            <div css={css(styles.card)}>
              <div>
                <span css={css(styles.heading)}>Hi! I'm <Colored color={variables.color.blue}>Kim</Colored>.</span>
              </div>
              <div css={css(styles.displayGrid)}>
                <BlinkingCaret>And I'm a web developer.</BlinkingCaret>
              </div>
            </div>
            <div css={css(styles.grid)}>
              <IconLink link="https://github.com/kimmy"><Github css={css(styles.icon)} /></IconLink>
              <IconLink link="mailto:hello@leabres.kim"><Mail css={css(styles.icon)} /></IconLink>
              <IconLink link="https://linkedin.com/in/kimleabres"><LinkedIn css={css(styles.icon)} /></IconLink>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
