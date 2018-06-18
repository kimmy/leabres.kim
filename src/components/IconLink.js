import React from "react";
import { css } from "emotion";

const style = css`
  line-height: 0;
  padding: 5px;
`

class IconLink extends React.Component {
  render() {
    const { link, children, target } = this.props
    const targetValue = (target) => {
      if (target == 'true') {
        return "_blank"
      }
    }

    return (
      <a href={link} target={targetValue(target)} className={style}>
        {children}
      </a>
    )
  }
}

export default IconLink


