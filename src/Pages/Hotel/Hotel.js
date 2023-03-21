import React, { useEffect, useState } from "react";
import SingleHotel from "./SingleHotel";

const Hotel = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("https://hotel-management-server-production.up.railway.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  console.log(rooms);
  return (
    <div className="mt-4">
      {rooms.length === 0 ? (
        <div className="spinner-border text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {rooms.map((room) => (
            <SingleHotel room={room} key={room._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotel;
