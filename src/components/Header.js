import React from 'react'
import { global } from '../styles/global'
import Footer from './Footer'

class Header extends React.Component {
  render() {
    return (
      <header id="header" className={global}>
        <div className="inner">
        </div>
       <Footer />
      </header>
    )
  }
}

export default Header
