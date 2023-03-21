import React, { useEffect, useState } from "react";
import SingleHotel from "./SingleHotel";

const Hotel = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  console.log(rooms);
  return (
    <div className="mt-4">
      <div className="row">
        {rooms.map((room) => (
          <SingleHotel room={room} key={room._id} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
