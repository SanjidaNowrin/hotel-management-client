import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      {/* <div className="container"> */}
      <img
        src="https://i.postimg.cc/tC6bBJxj/2461655.png"
        width="60px"
        alt=""
      />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link
            to="/rooms"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            <h5 className="title">Rooms</h5>
          </Link>
          <Link
            to="/addRoom"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            <h5 className="title">Add Room</h5>
          </Link>
          <Link
            to="/all_booking"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            <h5 className="title"> All Booking</h5>
          </Link>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
