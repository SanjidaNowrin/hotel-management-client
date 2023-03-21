import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Details = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState({});
  const [form, setForm] = useState({});
  useEffect(() => {
    fetch(
      `https://hotel-management-server-production.up.railway.app/room/${id}`
    )
      .then((res) => res.json())
      .then((data) => setRoomDetails(data));
  }, []);
  const { name, details, price, image, category } = roomDetails;
  //   submit function
  const user = (field, value) => {
    const newData = {
      ...form,
      [field]: value,
    };
    newData.name = name;
    newData.details = details;
    newData.price = price;
    newData.image = image;
    newData.category = category;
    setForm(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://hotel-management-server-production.up.railway.app/room/add",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added.");
        } else {
          alert("Something is wrong.....");
        }
      });
  };
  return (
    <div className="card mt-4 mb-3 border-0 container">
      <div className="row g-5 m-0">
        <div className="col-md-4 text-center ">
          <img
            src={image}
            className="img-fluid mt-5 border border-2 shadow"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className=" login-box">
              <div className="p-5 mb-5 border border-0 rounded shadow ">
                <div className="login-form">
                  {/* form start */}
                  <form>
                    <div className="mb-3">
                      <input value={name} className="form-control w-100" />
                    </div>
                    <div className="mb-3">
                      <input value={details} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <input value={`$${price}`} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <input value={category} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <input
                        placeholder="Enter User Name"
                        required
                        type="text"
                        value={form.user_name}
                        onChange={(e) => user("user_name", e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        placeholder="Enter User Email"
                        required
                        type="text"
                        value={form.user_email}
                        onChange={(e) => user("user_email", e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        placeholder="Enter User Phone Number"
                        required
                        type="text"
                        value={form.phone}
                        onChange={(e) => user("phone", e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        placeholder="Enter User Address"
                        required
                        type="text"
                        value={form.address}
                        onChange={(e) => user("address", e.target.value)}
                        className="form-control"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="btn btn book-btn"
                    >
                      Submit
                    </button>
                  </form>
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
