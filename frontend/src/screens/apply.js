import React from "react";
import { Link } from "react-router-dom";

function Apply() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="h-screen grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex bg-slate-100 items-center h-full">
          <div className="ml-7">
            <p className="text-5xl pb-2 font-bold text-center md:text-left md:text-6xl">Nice to meet you!</p>
            <p className="text-2xl pb-4 mr-4 text-center md:text-left">Positions for FA23 are closed, join us next semester!</p>
            <div className="flex flex-col justify-center items-center md:justify-normal md:items-start">
              <Link to="/apply">
                <button type="button" className="bg-blue-700 text-white px-5 py-2">
                  <p className="text-white text-sm my-4 mx-6">APPLY</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-slate-100">
          <img
            className="p-10 pt-20 pb-0 md:p-0 lg:scale-75 lg:pr-20" src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613d3750c3defc990e271119_undraw_social_friends_nsbv.svg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-center w-screen">
          <p className="text-3xl font-bold pt-10">Want to know more?</p>
          <p className="my-2 text-xl pt-2 pr-4 pl-4 pb-10">Coffee chat with us! You can find the NetID’s of Wardrobe members on the Team Page. Feel free to reach out to anyone, we would all be thrilled to meet you!</p>
        </div>
      </div>
    </div>
  );
}

export default Apply;