import React from "react";
import { Link } from "react-router-dom";
import homeMirror from "../components/images/landingPage/home_page_mirror.svg";
import homeTie from "../components/images/landingPage/home_tie.svg"
import homeShop from "../components/images/landingPage/home_shop.svg"
import homeStepOne from "../components/images/landingPage/home_step_one.svg"
import homeStepTwo from "../components/images/landingPage/home_step_two.svg"
import homeStepThree from "../components/images/landingPage/home_step_three.svg"
import homeApply from "../components/images/landingPage/home_apply.svg"
// import Logo from "../components/images/wardrobe_logo.png"

function Landingpage() {
  return (
    <div>
      <div className="md:h-screen grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex bg-slate-100 h-full items-center">
          <div className="ml-7 text-center md:text-left">
            <p className="text-xl text-blue-700 mt-5 md:mt-0">CORNELL WARDROBE</p>
            <p className="my-4 mr-4 text-4xl font-bold md:text-5xl xl:text-6xl">Pre-Professional Clothing For All Students</p>
            <p className="text-xl med:text-2xl">Helping any student pursue any opportunity</p>
            <Link to="/rent">
              <button type="button" className="bg-blue-600 mt-8">
                <p className="text-white text-sm my-4 mx-6">RENT NOW</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center bg-slate-100 h-full">
          <img
            src={homeMirror}
            alt="Man staring in mirror">
          </img>
        </div>
      </div>
      <div className="sm:h-screen sm:py-auto py-8 border-b">
        <div className="h-1/3 flex justify-content items-center">
          <div className="text-center w-screen">
            <p className="text-xl text-blue-700">WHAT WE DO</p>
            <p className="my-2 text-4xl font-bold mx-4 sm:pb-auto pb-4">Our Two Fold Approach</p>
          </div>
        </div>
        <div className="sm:h-2/3 gap-0 grid grid-rows-2 sm:flex sm:columns-2">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <img
                className="h-36 w-36 mx-auto"
                src={homeTie}
                alt="Man staring in mirror">
              </img>
              <p className="text-4xl font-bold mt-16 mb-8">Rental Model</p>
              <p className="mx-6">We provide free rental professional attire for any occasion to students throughout the semester. Take what you need
                and return it when you're done. We'll handle the cleaning!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <img
                className="h-36 w-36 mx-auto"
                src={homeShop}
                alt="Storefront">
              </img>
              <p className="text-4xl font-bold mt-16 mb-8">Pop-Up Shop</p>
              <p className="mx-6">Once a semester, we open a pop-up shop to give both used and new clothes to the student population.
                Everything is free and yours to keep!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20vh] flex justify-content items-center sm:h-[20vh]">
        <div className="text-center w-screen">
          <p className="text-xl text-blue-700">THE PROCESS</p>
          <p className="my-2 text-4xl font-bold">How it Works</p>
        </div>
      </div>
      <div className="h-[35vh] gap-0 columns-2 sm:h-[60vh]">
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <img
              className="h-96 w-96"
              src={homeStepOne}
              alt="Man staring at clipboards">
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
              <p className="text-5xl text-center text-blue-700 font-bold -rotate-90 hidden lg:flex">STEP ONE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[35vh] gap-0 columns-2 sm:h-[60vh]">
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="w-4/5">
              <p className="text-5xl text-center text-blue-700 font-bold -rotate-90 hidden lg:flex">STEP TWO</p>
            </div>
            <div className="-ml-8 sm:-ml-16">
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
              src={homeStepTwo}
              alt="Woman chatting">
            </img>
          </div>
        </div>
      </div>
      <div className="h-[35vh] gap-0 columns-2 sm:h-[60vh]">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <img
              className="h-96 w-96"
              src={homeStepThree}
              alt="Woman holding a package">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="">
              <p className="text-3xl mb-8 font-bold">Step Three: Pick Up</p>
              <p className="">Pick up your items at our Barnes Hall location and enjoy your attire!
              </p>
            </div>
            <div className="w-3/5">
              <p className="text-5xl text-center text-blue-700 font-bold -rotate-90 hidden lg:flex">STEP THREE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-0 grid grid-rows-2 sm:flex sm:columns-2 sm:h-[70vh]">
        <div className="flex bg-slate-100 h-full items-center justify-center">
          <div className="ml-7 w-2/3">
            <p className="text-lg text-blue-700">JOIN THE TEAM</p>
            <p className="my-2 mr-4 text-4xl font-bold">Interested in joining?</p>
            <p className="text-xl">Applications are currently open for the Spring 2024 season. 
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
        <div className="pb-8 w-full flex items-center justify-center bg-slate-100 h-full sm:pb-auto">
          <img
            className="h-96 w-96 pr-3 med:pr-0"
            src={homeApply}
            alt="Application">
          </img>
        </div>
      </div>
      {/* <div className="h-[70vh] flex justify-content items-center">
        <div className="text-center w-screen">
          <img
          className="h-24 w-24 m-auto"
          src={Logo}
          alt="Wardrobe logo">
          </img>
          <p className="text-sm text-blue-700 my-8">LATEST NEWS</p>
          <p className="my-2 text-4xl font-bold mb-8">Keep up to date</p>
          <div className="flex justify-center align-middle mt-12">
            <form action="https://www.list.cornell.edu/subscribe/subscribe.tml" method="POST" target="blank">
              <input type="text" name="email" placeholder="Enter your email" className="border p-1 pr-24 border-gray"/>
              <input type="hidden" NAME="name" VALUE=""/>
              <input type="hidden" name="list" value="wardrobe-l"/>
              <input type="hidden" name="lists" value="wardrobe-l"/>
              <input type="hidden" name="demographics" value="" />
              <input type="hidden" name="name_required" value="" />
              <input type="hidden" name="pw_required" value="" />
              <input type="hidden" name="confirm" value="one_hello" />
              <input type="hidden" name="showconfirm" value="T" />
              <input type="hidden" name="url" value="" />
              <input type="hidden" name="appendsubinfotourl" value="" />
              <input type="hidden" name="secx" value="e1e742b1" />
              <button type="submit" value="subscribe" title="subscribe" alt="subscribe" name="subscribe" className="bg-blue-600 h-full">
                <p className="text-white text-sm my-auto mx-8">Submit</p>
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Landingpage;
