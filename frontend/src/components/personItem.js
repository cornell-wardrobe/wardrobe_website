import React from "react";

function PersonItem({ image, name, netID, position }) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md w-48 h-96 mx-4 my-4 flex flex-col justify-end transition-transform duration-300 ease-in-out transform hover:rotate-3">
      <img src={image} alt={name} className="w-full h-96 object-cover" />
      <div className="p-2">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-sm font-bold">{name}</h2>
          <p className="text-gray-700 text-xs">{netID}</p>
        </div>
        <p className="text-gray-700 text-xs mb-1">{position}</p>
      </div>
    </div>
  );
}
export default PersonItem;
