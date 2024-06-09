import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <BrowserRouter>
    <Header/>
    {/* <Footer/> */}
    <Routes>
      <Route
      exact path="/"
      element=
    {
    <><section className="bgimage" id="home">
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 className="hero_title">Hi, it's me Shruti</h2>
                <p className="hero_desc">Welcome to my Portfolio</p>
            </div>
            </div>
        </div>
    </section></>}
    />
    
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
