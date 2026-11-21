import React from "react";
// import { Link } from "react-router-dom";
import rentFirst from "../components/images/rent/rent-first.svg";
import rentFindYourFit from "../components/images/rent/rent-find-your-fit.png";
import rentMensSize from "../components/images/rent/rent-mens-size.jpeg";
import rentWomensSize from "../components/images/rent/rent-womens-size.jpeg";

function Rent() {
  return (
    <div className="bg-white"><div className="pt-10 pb-16 max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row items-center mx-6 md:mx-10">
        <div className="pl-2.5 pr-2.5 md:w-6/12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-5 mb-4">Looking for attire?</h1>
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScBXVCcrQ9AZZqgsyM-in8vWJAVQ2SFEAsvCfLWRkRqUUJMxw/viewform">
          <button type="button" className="btn">
              <p>RENT</p>
          </button>
          </a>
        </div>
        <div className="pl-2.5 pr-2.5 md:w-6/12 mt-8 md:mt-0">
          <img
            className="max-w-full align-middle inline-block w-96"
            src={rentFirst}
            alt="post"
          ></img>
        </div>
      </div>
      <div className="pt-10">
        <div>
          <h2 className="text-3xl sm:text-4xl mt-5 mb-3 text-center">
            Unsure of size?
          </h2>
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
            <h3 className="text-center text-2xl mt-5 mb-3">
              Men&apos;s Sizes
            </h3>
            <img
              className="text-center align-middle inline-block"
              src={rentMensSize}
              alt="msize"
            ></img>
          </div>
          <div className="text-center max-w-screen-md px-3 mx-auto">
            <h3 className="text-center text-2xl mt-5 mb-3">
              Women&apos;s Sizes
            </h3>
            <img
              className="text-center align-middle inline-block"
              src={rentWomensSize}
              alt="fsize"
            ></img>
          </div>
        </div>
      </div>
    </div></div>
  );
}

export default Rent;
