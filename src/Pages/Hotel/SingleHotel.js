import React from "react";
import { Link } from "react-router-dom";
import { RiHotelBedFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLuggageCart } from "react-icons/fa";
const SingleHotel = ({ room }) => {
  const { name, details, image, price, category, _id } = room || {};
  return (
    <div className="col-lg-4 col-sm-6 gx-5">
      <div className="p-3 mb-5 border-0 rounded shadow cardHover card w-100 card-bg">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="mb-3 text-center card-title font-weight-bold title">
            {name}
          </h3>
          <p className="card-text details">{details}</p>
          <div className="d-flex justify-content-between title mb-3">
            <h5 className="card-text d-flex align-items-center mb-0">
              <RiHotelBedFill className="me-1" />
              {category}
            </h5>
            <h5 className="card-text d-flex align-items-center">
              <RiMoneyDollarCircleFill className="me-1" /> {price}
            </h5>
          </div>
          <div className="text-center">
            <Link to={`/room/${_id}`}>
              <button className="book-btn border-0 p-2">
                <FaLuggageCart className="me-1" /> Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
