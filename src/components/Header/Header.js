import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <div className="wrapper d-flex justify-content-around">
      <h1 className="logo">
        <i className="fas fa-cloud-sun"></i>
        <Link to="/">Forecaster</Link>
      </h1>
      <div className="github">
        <i className="fab fa-github"></i>
        <a href="https://github.com/exsanik"> github.com/exsanik</a>
      </div>
    </div>
  )
}

export default Header
