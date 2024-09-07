import React from "react";
import applyFirst from "../components/images/apply/apply-first.svg";

function Apply() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="h-[70vh] xs:h-[75vh] md:h-screen grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex w-screen bg-slate-100 items-center h-full md:w-[50vw]">
          <div className="mx-4 mt-16 xs:mx-0 xs:mt-0 justify-center w-full md:ml-7">
            <p className="text-5xl pb-2 font-bold text-center md:text-left md:text-6xl">Nice to meet you!</p>
            <p className="text-2xl pb-2 mr-4 text-center md:text-left">Applications are now opened for F24. We're excited to see you apply!</p>
            <div className="flex flex-col justify-center items-center md:justify-normal md:items-start">
            <a
                href="https://docs.google.com/forms/d/1Uc2fvgIQuLscxT1cA9MHq6uPjJV5wJheH7uyNU6l8mo/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="bg-blue-700 text-white px-5 py-2">
                  <p className="text-white text-sm my-4 mx-6">APPLY</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-slate-100">
          <img
            className="md:p-0 scale-75 sm:scale-50 md:scale-75 lg:pr-20" 
            src={applyFirst}
            alt="People sitting on computer"
          />
        </div>
      </div>
    </div>
  );
}

export default Apply;