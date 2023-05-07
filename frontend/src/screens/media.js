import React from "react";
import { Link } from "react-router-dom";

function Media() {
  return (
    <div>
      <div className="w-full ml-[17%]">
        <p className="text-2xl md:text-3xl font-bold ">Styling in Motion</p>
        <p className="text-1xl ">Witness Wardrobe's Work in Action</p>
      </div>
      <div className="h-auto w-auto flex items-center justify-center">
        <div className="mx-auto w-4/5 md:w-2/3">
          <img
            src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/640145141131157ded7e4ea1_Wardrobe%20Lookbook%20FINAL.png"
            alt="Wardrobe Image">
          </img>
        </div>
      </div>
      {/* <div>
        <h2 className="text-3xl font-bold">
          Ask Us!
        </h2>
      </div> */}
    </div>
  );
}

export default Media;
