import React from "react";
import { css } from "@emotion/core";

const style = css`
  line-height: 0;
  padding: 5px;
`

const IconLink = ({ link, children }) => (
  <a href={link} target="_blank" rel="noreferrer" css={style}>
    {children}
  </a>
)

export default IconLink


