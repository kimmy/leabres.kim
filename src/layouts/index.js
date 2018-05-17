import React from "react";
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

import Header from '../components/Header'

export default ({ children }) => (
  <div className="template-wrapper">
    <div>
      {/* <Header /> */}
      {children()}
    </div>
  </div>
);
