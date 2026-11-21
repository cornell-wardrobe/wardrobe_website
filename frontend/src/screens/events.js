import React from "react";
// import { Link } from "react-router-dom";
import PhotoPanel from "../components/photoPanel";
import eventsTop from "../components/images/events/events_hero_top.svg";
import eventsBottom from "../components/images/events/events_hero_bottom.svg";
import eventsStart from "../components/images/events/events-first.svg";
import eventsStepOne from "../components/images/events/events-step-one.svg";
import eventsStepTwo from "../components/images/events/events-step-two.svg";
import eventsStepThree from "../components/images/events/events-step-three.svg";

function Events() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-7rem)]">
        <PhotoPanel className="flex items-center justify-center lg:w-1/2 pt-36 sm:pt-56 pb-16 lg:py-12">
          {/* Decorative pop-up shop details: bunting + garment rail above, floor items below */}
          <img
            src={eventsTop}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 top-0 h-[120px] w-full object-cover object-top sm:h-auto sm:aspect-[720/205]"
          />
          <img
            src={eventsBottom}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-0 left-0 hidden w-full object-cover object-bottom lg:block lg:aspect-[720/170]"
          />
          <div className="px-6 text-center lg:text-left lg:pl-16 xl:pl-32">
            <p className="eyebrow text-xl">GET EXCITED FOR</p>
            <h1 className="my-4 text-4xl sm:text-5xl lg:text-6xl">Pop-Up Shop</h1>
            <p className="text-xl md:text-2xl">Fall 2026 Pop-Up Shop!</p>
            <p className="text-lg md:text-2xl italic">Date: December 4th, 2026</p>
            <p className="text-lg md:text-2xl italic">Location: TBD</p>
            {/* <Link to="https://cglink.me/2ee/r2302935" target="blank">
              <button type="button" className="bg-blue-600 mt-8">
                <p className="text-white text-sm my-4 mx-6">REGISTER</p>
              </button>
            </Link> */}
          </div>
        </PhotoPanel>
        <div className="flex items-center justify-center bg-cream lg:w-1/2 py-10 lg:py-0">
          <img
            className="max-h-[70vh] w-auto max-w-full px-6"
            src={eventsStart}
            alt="Women standing with her suit">
          </img>
        </div>
      </div>
      <div className="bg-white py-16 flex justify-content items-center">
        <div className="text-center w-full px-4">
          <p className="eyebrow">SEMESTERLY SHOP</p>
          <h2 className="my-2 text-3xl sm:text-4xl md:text-5xl">The Details</h2>
        </div>
      </div>
      <div className="bg-white md:min-h-[60vh] flex flex-col md:flex-row gap-6 md:gap-0 px-4 pb-10">
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <img
              className="mt-0 lg:ml-56 h-72 w-72 sm:h-96 sm:w-96 max-w-full"
              src={eventsStepOne}
              alt="Man looking at newspaper">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="mx-0 md:mx-12 lg:ml-80 lg:-mr-14 z-30">
              <h3 className="text-2xl sm:text-3xl mb-4">WHAT is the Pop-Up Shop?</h3>
              <p className="">Once a semester, we open a pop-up shop to give both used and new clothes to the student population.
              </p>
            </div>
            <div className="w-3/5">
              <p className="lg:mr-56 lg:mt-8 title text-5xl text-center text-brand-blue -rotate-90 hidden lg:flex">PURPOSE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:min-h-[60vh] flex flex-col md:flex-row gap-6 md:gap-0 px-4 pb-10">
        <div className="flex items-center justify-center h-full md:hidden">
          <div className="">
            <img
              className="mt-0 lg:mr-56 h-72 w-72 sm:h-96 sm:w-96 max-w-full"
              src={eventsStepTwo}
              alt="Woman looking down at sun">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="w-4/5">
              <p className="lg:ml-56 lg:mt-4 title text-5xl text-center text-brand-blue -rotate-90 hidden lg:flex">PEOPLE</p>
            </div>
            <div className="lg:-ml-14 lg:w-96 mx-0 md:mx-12 z-30">
              <h3 className="text-2xl sm:text-3xl mb-4">WHO can attend?</h3>
              <p className="">Our Pop-up Shop is no exception to our mission, providing free professional clothing for ALL students to pursue ANY opportunity.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-center h-full md:flex">
          <div className="">
            <img
              className="mt-0 h-72 w-72 sm:h-96 sm:w-96 max-w-full"
              src={eventsStepTwo}
              alt="Woman looking down at sun">
            </img>
          </div>
        </div>
      </div>
      <div className="bg-white md:min-h-[60vh] flex flex-col md:flex-row gap-6 md:gap-0 px-4 pb-10">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <img
              className="mt-0 lg:ml-56 h-72 w-72 sm:h-96 sm:w-96 max-w-full z-0"
              src={eventsStepThree}
              alt="Two people handshake">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="mx-0 md:mx-12 lg:ml-72 lg:-mr-14 z-30">
              <h3 className="text-2xl sm:text-3xl mb-4">HOW does it work?</h3>
              <p className="">Browse our extensive select, and pick out up to 2-3 pieces of clothing person, for FREE!
              </p>
            </div>
            <div className="w-3/5">
              <p className="lg:mr-48 lg:mt-10 title text-5xl text-center text-brand-blue -rotate-90 hidden lg:flex">PROCEDURE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
