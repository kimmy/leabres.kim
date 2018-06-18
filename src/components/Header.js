import React from "react";
import { Kim } from "../assets/icons/icons"
import { css, cx } from "emotion"
import header from "../assets/css/header"
import Link from "gatsby-link"

export default () => (
  <div className={css(header.grid)}>
    <Link to="/" className={cx(css(header.link), css(header.lineHeight))}><Kim /></Link>
  </div>
)
