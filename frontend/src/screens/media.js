import React from "react";
import { Link } from "react-router-dom";

function Media() {
  return (
    <div>
      <p className="text-3xl font-bold">Styling in Motion</p>
      <div>
        <h3 style={{ color: "blue" }}>Witness Wardrobe's Work in Action
        </h3>
        <img
          className="hidden h-100 w-auto lg:block"
          src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/640145141131157ded7e4ea1_Wardrobe%20Lookbook%20FINAL.png"
          alt="Your Company"
        />
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
