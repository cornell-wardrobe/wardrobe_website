import React from "react";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div>
      <div className="h-screen gap-0 columns-2">
        <div className="flex bg-slate-100 h-full items-center">
          <div className="ml-7">
            <p className="text-xl text-blue-700">GET EXCITED FOR</p>
            <p className="my-4 mr-4 text-6xl font-bold">Pop-Up Shop</p>
            <p className="text-2xl">April 21st 3:00-4:30 PM</p>
            <p className="text-2xl">@ Willard Straight Hall</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-slate-100 h-full">
          <img
          src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/6420d3c27894bfdc9e319c0f_Suit.svg" 
          alt="Women standing with her suit">
          </img>
        </div>
      </div>
      <div className="h-[25vh] flex justify-content items-center">
          <div className="text-center w-screen">
            <p className="text-xl text-blue-700">SEMESTERLY SHOP</p>
            <p className="my-2 text-4xl font-bold">The Details</p>
          </div>
      </div>
      <div className="h-[60vh] gap-0 columns-2">
          <div className="flex items-center justify-center h-full">
            <div className="flex">
              <img
              className="h-96 w-96"
              src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613c2d7b4fc605c931ee8d24_undraw_Lost_re_xqjt.svg" 
              alt="Man looking at newspaper">
              </img>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="flex">
              <div className="">
                <p className="text-3xl mb-8 font-bold">Step One: Order</p>
                <p className="">Place your order for the desired items, colors, and sizes using our rental form.
                </p>
              </div>
              <div className="w-3/5">
                <p className="text-5xl text-center text-blue-700 font-bold -rotate-90">STEP ONE</p>
              </div>
            </div>
          </div>
      </div>
      <div className="h-[60vh] gap-0 columns-2">
          <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="w-4/5">
                <p className="text-5xl text-center text-blue-700 font-bold -rotate-90">STEP TWO</p>
              </div>
              <div className="-ml-16">
                <p className="text-3xl mb-8 font-bold">Step Two: Wait</p>
                <p className="">Wait for our team's response to your request. We'll get back to you within 48 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="">
              <img
              className="h-96 w-96"
              src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613bf3c3f8a2495b1e279654_undraw_Chat_re_re1u.svg" 
              alt="Woman chatting">
              </img>
            </div>
          </div>
      </div>
      <div className="h-[60vh] gap-0 columns-2">
          <div className="flex items-center justify-center h-full">
            <div className="">
              <img
              className="h-96 w-96"
              src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613bf6fd540d8f91679f4c4d_undraw_Order_delivered_re_v4ab.svg" 
              alt="Woman holding a package">
              </img>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
          <div className="flex">
              <div className="">
                <p className="text-3xl mb-8 font-bold">Step Three: Pick Up</p>
                <p className="">Pick up your items at our Barnes Hall location and enjoy your professional attire!
                </p>
              </div>
              <div className="w-3/5">
                <p className="text-5xl text-center text-blue-700 font-bold -rotate-90">STEP THREE</p>
              </div>
            </div>
          </div>
      </div>
      <div className="h-[70vh] gap-0 columns-2">
        <div className="flex bg-slate-100 h-full items-center">
          <div className="ml-7 w-2/3">
            <p className="text-lg text-blue-700">JOIN THE TEAM</p>
            <p className="my-2 mr-4 text-4xl font-bold">Interested in joining?</p>
            <p className="text-xl">Applications are currently closed but will be open again starting Fall 2023. 
            We look forward to hearing from you!</p>
            <div>
              <Link to="/apply">
                <button type="button" className="bg-blue-600 mt-8">
                  <p className="text-white text-sm my-4 mx-6">APPLICATION INFO</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-slate-100 h-full">
          <img
          className="h-96 w-96"
          src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613bfc96c3d4908a8ee0e2a6_undraw_Resume_re_hkth.svg" 
          alt="Application">
          </img>
        </div>
      </div>
      <div className="h-[70vh] flex justify-content items-center">
          <div className="text-center w-screen">
            <img
            className="h-24 w-24 m-auto"
            src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613b88e3d1d6425d8987647f_Nav_Logo.png" 
            alt="Application">
            </img>
            <p className="text-sm text-blue-700 my-8">LATEST NEWS</p>
            <p className="my-2 text-4xl font-bold mb-8">Keep up to date</p>
            <input type="text" placeholder="Enter your email" className="border p-1 pr-24 my-12 border-black"></input>
          </div>
        </div>
    </div>
  );
}

export default Events;
