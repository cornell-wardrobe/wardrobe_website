import React from "react";

function PersonItem({ image, name, netID, position }) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md w-48 h-96 mx-4 my-4">
      <img src={image} alt={name} className="w-full h-72 object-cover " />
      <div className="p-2">
        <h2 className="text-sm font-bold mb-1">{name}</h2>
        <p className="text-gray-700 text-xs mb-1">ID: {netID}</p>
        <p className="text-gray-700 text-xs mb-1">Position: {position}</p>
      </div>
    </div>
  );
}
export default PersonItem;
