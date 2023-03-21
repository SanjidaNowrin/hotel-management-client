import React, { useEffect, useState } from "react";

const AllBooking = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  console.log(cart);
  return (
    <div className="card mt-4 mb-3 border-0 container card-bg ">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Hotel Name</th>
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
                <img width="100%" className="cart-image" src={c.image} alt="" />
              </td>
              <td>{c.name}</td>
              <td>${c.price}</td>
              <td>{c.category}</td>
              {/* <td>
              {cart.payment ? (
                "Paid"
              ) : (
                <Link to={`/dashboard/payment/${cart._id}`}>
                  <button
                    className="text-white btn"
                    style={{ backgroundColor: "#895E40" }}
                  >
                    <i class="fab fa-stripe fa-2x"></i>
                  </button>
                </Link>
              )}
            </td> */}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllBooking;
