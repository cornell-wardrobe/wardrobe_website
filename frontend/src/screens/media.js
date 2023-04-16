import React from "react";
import { Link } from "react-router-dom";

function Media() {
  return (
    <div>
      <div className="text-3xl font-bold mx-auto">
        <p>Styling in Motion</p>
      </div>
      <div>
        <h3 style={{ color: "black" }}>Witness Wardrobe's Work in Action
        </h3>
      </div>
      <div className="h-auto w-2/3 flex items-center justify-center">
        <img
          src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/640145141131157ded7e4ea1_Wardrobe%20Lookbook%20FINAL.png"
          alt="Wardrobe Image">
        </img>
      </div>

      <div>
        <h2 className="text-3xl font-bold">
          Ask Us!
        </h2>
      </div>
    </div>
  );
}

export default Media;
