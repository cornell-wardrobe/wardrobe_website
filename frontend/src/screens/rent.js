import React from "react";
// import { Link } from "react-router-dom";
import rentFirst from "../components/images/rent/rent-first.svg";
import rentFindYourFit from "../components/images/rent/rent-find-your-fit.png";
import rentMensSize from "../components/images/rent/rent-mens-size.jpeg";
import rentWomensSize from "../components/images/rent/rent-womens-size.jpeg";

function Rent() {
  return (
    <div className="pt-10 max-w-screen-lg mx-auto">
      <div className="flex flex-row items-center ml-10 mr-10">
        <div className="pl-2.5 pr-2.5 w-6/12 float-left">
          <p className="text-3xl font-bold mt-5 mb-3">Looking for attire?</p>
          <div className="mb-8">
            Fill out our rental form for the desired items at least 48 hours in advance. 
            Our team will respond promptly with a pickup date, location, and return date. 
            We look forward to hearing from you!
          </div>
          <div className="mb-8">
          </div>
          {/*Active: bg-blue-700, inactive: bg-white-400*/ }
          {/* <Link to="https://docs.google.com/forms/d/1FOT_pIRk2B3cBnwKnemBGdFVbWrBuAgzCTTQ13uoc54/viewform" target="blank">
            <button type="button" className="bg-blue-700 text-white px-5 py-2">
              <p className="text-white text-sm my-4 mx-6">RENT</p>
            </button>
          </Link> */}
          <a href="https://forms.gle/W9TnXKHAxqbP657W8">
          <button type="button" className="bg-blue-700 text-white px-5 py-2 cursor-default">
              <p className="text-white text-sm my-4 mx-6">RENT</p>
          </button>
          </a>
        </div>
        <div className="pl-2.5 pr-2.5 w-6/12 float-left">
          <img
            className="max-w-full align-middle inline-block w-96"
            src={rentFirst}
            alt="post"
          ></img>
        </div>
      </div>
      <div className="pt-10">
        <div>
          <p className="text-3xl font-bold mt-5 mb-3 text-center">
            Unsure of size?
          </p>
          <p className="text-center">
            Use our fitting guide to help find what&apos;s most comfortable for you.
          </p>
          <div className="mt-10 text-center">
            <img
              className="align-middle max-w-full text-center mx-auto"
              src={rentFindYourFit}
              alt="size"
            ></img>
          </div>
        </div>
        <div>
          <div className="text-center max-w-screen-md px-3 mx-auto">
            <p className="text-center text-2xl font-semibold mt-5 mb-3">
              Men&apos;s Sizes
            </p>
            <img
              className="text-center align-middle inline-block"
              src={rentMensSize}
              alt="msize"
            ></img>
          </div>
          <div className="text-center max-w-screen-md px-3 mx-auto">
            <p className="text-center text-2xl font-semibold mt-5 mb-3">
              Women&apos;s Sizes
            </p>
            <img
              className="text-center align-middle inline-block"
              src={rentWomensSize}
              alt="fsize"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
