import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";

const Header = () => {
    let headerstyle={
        // position: "relative",
        // top: "10vh",
        width: "100%",
        backgroundColor: "#dec44e",
        // border: "7px solid green",
        // color: "white",
      }
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
        <div className="container-fluid" style={headerstyle} >
            <Link className="navbar-brand" to="/">Shruti</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
  )
}

export default Header
