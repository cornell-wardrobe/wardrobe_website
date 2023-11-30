import React from "react";
import rentFirst from "../components/images/rent/rent-first.svg";

function Rent() {
  return (
    <div className="pt-10 max-w-screen-lg mx-auto">
      <div className="flex flex-row items-center ml-10 mr-10">
        <div className="pl-2.5 pr-2.5 w-6/12 float-left">
          <p className="text-3xl font-bold mt-5 mb-3">Looking for attire?</p>
          <div className="mb-10">
            Fill out our rental form for the desired items at least 48 hours in advance. 
            Our team will respond promptly with a pickup date, location, and return date. 
            We look forward to hearing from you!
          </div>
          <a className="bg-blue-700 text-white px-10 py-5" href="https://forms.gle/bvHDuMR7LcJPcgRo8">
            RENT
          </a>
        </div>
        <div className="pl-2.5 pr-2.5 w-6/12 float-left">
          <img className="max-w-full align-middle inline-block w-96" 
          src={rentFirst} 
          alt="post">
          </img>
        </div>
      </div>
      <div className="pt-10">
      </div>
    </div>
  );
}

export default Rent;
