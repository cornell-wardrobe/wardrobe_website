import React from "react";
// import { Link } from "react-router-dom";
import eventsStart from "../components/images/events/events-first.svg";
import eventsStepOne from "../components/images/events/events-step-one.svg";
import eventsStepTwo from "../components/images/events/events-step-two.svg";
import eventsStepThree from "../components/images/events/events-step-three.svg";

function Events() {
  return (
    <div>
      <div className="h-[75vh] xs:h-screen grid grid-rows-2 gap-0 bg-slate-100 lg:flex lg:columns-2">
        <div className="flex h-full items-center justify-center lg:justify-normal">
          <div className="md:mb-24 lg:mb-0 lg:ml-32 xl:ml-56 text-center lg:text-left">
            <p className="text-xl text-blue-700">GET EXCITED FOR</p>
            <p className="my-4 mr-4 text-4xl font-bold med:text-5xl lg:text-6xl">Pop-Up Shop</p>
            <p className="text-xl  med:text-2xl">Stay tuned for details about the Spring 2025 Pop-Up Shop!</p>
            {/* <p className="text-lg med:text-2xl italic">Willard Memorial Room @1 - 3</p> */}
            {/* <Link to="https://cornell.campusgroups.com/Wardrobe/rsvp_boot?id=2277144" target="blank">
              <button type="button" className="bg-blue-600 mt-8">
                <p className="text-white text-sm my-4 mx-6">REGISTER</p>
              </button>
            </Link> */}
          </div>
        </div>
        <div className="flex grow-0 lg:ml-32 xl:ml-56 lg:mr-28 items-center justify-center bg-slate-100 lg:h-full h-3/6 lg:my-0 my-16">
          <img
            src={eventsStart}
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
      <div className="h-[60vh] grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <img
              className="mt-16 lg:mt-0 lg:ml-56 h-96 w-96"
              src={eventsStepOne}
              alt="Man looking at newspaper">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="mx-12 mt-32 lg:mt-0 lg:ml-80 -mr-14 z-30">
              <p className="text-3xl mb-8 font-bold">WHAT is the Pop-Up Shop?</p>
              <p className="">Once a semester, we open a pop-up shop to give both used and new clothes to the student population.
              </p>
            </div>
            <div className="w-3/5">
              <p className="lg:mr-56 lg:mt-8 text-5xl text-center text-blue-700 font-bold -rotate-90 hidden lg:flex">PURPOSE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex items-center justify-center h-full md:hidden">
          <div className="">
            <img
              className="mt-16 lg:mt-0 lg:mr-56 h-96 w-96"
              src={eventsStepTwo}
              alt="Woman looking down at sun">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="w-4/5">
              <p className="lg:ml-56 lg:mt-4 text-5xl text-center text-blue-700 font-bold -rotate-90 hidden lg:flex">PEOPLE</p>
            </div>
            <div className="mt-32 lg:mt-0 -ml-14 lg:w-96 mx-12 z-30">
              <p className="text-3xl mb-8 font-bold">WHO can attend?</p>
              <p className="">Our Pop-up Shop is no exception to our mission, providing free professional clothing for ALL students to pursue ANY opportunity.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-center h-full md:flex">
          <div className="">
            <img
              className="mt-40 lg:mt-0 h-96 w-96"
              src={eventsStepTwo}
              alt="Woman looking down at sun">
            </img>
          </div>
        </div>
      </div>
      <div className="h-[60vh] grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <img
              className="mt-32 lg:mt-0 lg:ml-56 h-96 w-96 z-0"
              src={eventsStepThree}
              alt="Two people handshake">
            </img>
          </div>
        </div>
        <div className="pb-8 md:pb-0 flex items-center justify-center h-full">
          <div className="flex">
            <div className="mt-32 lg:mt-0 mx-12 lg:ml-72 -mr-14 z-30">
              <p className="text-3xl mb-8 font-bold">HOW does it work?</p>
              <p className="">Browse our extensive select, and pick out up to 2-3 pieces of clothing person, for FREE!
              </p>
            </div>
            <div className="w-3/5">
              <p className="lg:mr-48 lg:mt-10 text-5xl text-center text-blue-700 font-bold -rotate-90 hidden lg:flex">PROCEDURE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
