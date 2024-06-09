import React from "react";
import "./Portfolio.css";
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter,
  } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center ">Portfolio</h1>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="abcd">
            <div className="card portfolioContent">
              <img
                className="card-img-top"
                src="./travel-022.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Travelling Booking Site</h4>
                {/* <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                <div className="text-center">
                  <Link to="#" className="btn btn-success">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="abcd">
            <div className="card portfolioContent">
              <img
                className="card-img-top"
                src="./dromkit.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Musical Drumkit</h4>
                {/* <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                <div className="text-center">
                  <Link to="#" className="btn btn-success">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100"></div>

          <div className="abcd">
            <div className="card portfolioContent">
              <img
                className="card-img-top"
                src="./foodoutlet.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Food Outlet Website</h4>
                {/* <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                <div className="text-center">
                  <Link to="#" className="btn btn-success">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="abcd">
            <div className="card portfolioContent">
              <img
                className="card-img-top"
                src="./movieseachengine.png"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Twitter Clone</h4>
                {/* <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                <div className="text-center">
                  <Link to="#" className="btn btn-success">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
