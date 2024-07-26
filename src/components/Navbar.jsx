import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top  bg-dark">
        <div className="container p-3">
          <a className="navbar-brand fw-bold fs-3 text-primary" href="#">
            FooDFest
          </a>
          <button
            className="navbar-toggler border border-white bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-around" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#gallery">
                  Gallery
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#message">
                  Message
                </a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
      <input className="form-control me-2 w-150" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn  btn btn-primary" type="submit">Search</button>
    </form>
          </div>
         
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
