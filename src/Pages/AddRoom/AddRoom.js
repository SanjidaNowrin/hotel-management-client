import React, { useState } from "react";

const AddRoom = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  //  error condition function
  const validateForm = () => {
    const { name, details, price, image } = form;
    const newErrors = {};
    if (name?.length < 3 || name === undefined)
      newErrors.name = "Please enter at least 3 digit";
    if (details?.length < 5 || details === undefined)
      newErrors.details = "Please enter at least some information";
    if (price === undefined) newErrors.price = "Please enter the price ";
    if (image === undefined) newErrors.image = "Please enter the image link";
    return newErrors;
  };
  //   submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // error handle
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      fetch("http://localhost:5000/addRoom", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      alert("room Added");
      setForm({
        name: "",
        details: "",
        price: "",
        image: "",
      });
    }
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Hotel Name
          </label>
          <input
            placeholder="Enter Hotel Name"
            type="text"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            className="form-control"
            id="exampleInputName"
            aria-describedby="name"
          />
          <div id="name" className="form-text">
            {errors.name}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Details
          </label>
          <input
            placeholder="Enter Hotel Room Details"
            type="text"
            value={form.details}
            onChange={(e) => setField("details", e.target.value)}
            className="form-control"
            id="details"
            aria-describedby="details"
          />
          <div id="details" className="form-text">
            {errors.details}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            placeholder="Enter Hotel Price in $"
            type="number"
            value={form.price}
            onChange={(e) => setField("price", e.target.value)}
            className="form-control"
            id="price"
            aria-describedby="price"
          />
          <div id="price" className="form-text">
            {errors.price}
          </div>
        </div>
        <div className="mb-3">
          <select
            onChange={(e) => setField("category", e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Category</option>
            <option value="standard">Standard room</option>
            <option value="premium">Premium Room</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image Link
          </label>
          <input
            placeholder="Enter Hotel image"
            type="text"
            value={form.image}
            onChange={(e) => setField("image", e.target.value)}
            className="form-control"
            id="image"
            aria-describedby="image"
          />
          <div id="image" className="form-text">
            {errors.image}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
