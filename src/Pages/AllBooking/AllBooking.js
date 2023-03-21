import React, { useEffect, useState } from "react";
import { FaStripe } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";

const AllBooking = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://hotel-management-server-production.up.railway.app/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  console.log(cart);
  return (
    <div className="container">
      <Navbar />
      <div className="card mt-4 mb-3 border-0  card-bg cart-table">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Hotel Name</th>
              <th>User Email</th>
              <th>Room Price</th>
              <th>Category</th>
              <th>Payment</th>
            </tr>
          </thead>
          {cart?.map((c, index) => (
            <tbody key={c._id}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img
                    width="100%"
                    className="cart-image"
                    src={c.image}
                    alt=""
                  />
                </td>
                <td>{c.name}</td>
                <td>{c.user_email}</td>
                <td>${c.price}</td>
                <td>{c.category}</td>
                <td>
                  <Link to={`/payment/${c._id}`}>
                    <button
                      className="text-white btn"
                      style={{ backgroundColor: "#0a3454" }}
                    >
                      <h3>
                        <FaStripe />
                      </h3>
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllBooking;
