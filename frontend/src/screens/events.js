import React from "react";

function Events() {
  return (
    <div>
      <div className="h-screen grid grid-rows-2 gap-0 bg-slate-100 lg:flex lg:columns-2">
        <div className="flex h-full items-center justify-center lg:justify-normal">
          <div className="lg:ml-56 text-center lg:text-left">
            <p className="text-xl text-blue-700">GET EXCITED FOR</p>
            <p className="my-4 mr-4 text-4xl font-bold med:text-5xl xl:text-6xl">Pop-Up Shop</p>
            <p className="text-xl med:text-2xl">April 21st 3:00-4:30 PM</p>
            <p className="text-xl med:text-2xl">@ Willard Straight Hall</p>
          </div>
        </div>
        <div className="flex grow-0 lg:ml-56 lg:mr-28 items-center justify-center bg-slate-100 lg:h-full h-3/6 lg:my-0 my-16">
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
      <div className="h-[60vh] grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <img
              className="mt-16 lg:mt-0 lg:ml-56 h-96 w-96"
              src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613c2d7b4fc605c931ee8d24_undraw_Lost_re_xqjt.svg"
              alt="Man looking at newspaper">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="mx-12 mt-32 lg:mt-0 lg:ml-80 -mr-14">
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
              src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/6420d77ef2602a3429f567c3_undraw_breaking_barriers_vnf3%201.svg"
              alt="Woman looking down at sun">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="w-4/5">
              <p className="lg:ml-56 lg:mt-4 text-5xl text-center text-blue-700 font-bold -rotate-90 hidden lg:flex">PEOPLE</p>
            </div>
            <div className="mt-32 lg:mt-0 -ml-14 lg:w-96 mx-12">
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
              src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/6420d77ef2602a3429f567c3_undraw_breaking_barriers_vnf3%201.svg"
              alt="Woman looking down at sun">
            </img>
          </div>
        </div>
      </div>
      <div className="h-[60vh] grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <img
              className="mt-16 lg:mt-0 lg:ml-56 h-96 w-96"
              src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/6420d77ee6ce558cf8105a48_undraw_interview_rmcf%201.svg"
              alt="Two people handshake">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="mt-32 lg:mt-0 mx-12 lg:ml-72 -mr-14">
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
