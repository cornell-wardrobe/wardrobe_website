import React from "react";
import applyFirst from "../components/images/apply/apply-first.svg";
// import recruitment_1 from "../components/images/apply/recruitment_1.png"
// import recruitment_2 from "../components/images/apply/recruitment_2.png"

function Apply() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="h-[70vh] xs:h-[75vh] md:h-screen grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex w-screen bg-slate-100 items-center h-full md:w-[50vw]">
          <div className="mx-4 mt-16 xs:mx-0 xs:mt-0 justify-center w-full md:ml-7">
            <p className="text-5xl pb-2 font-bold text-center md:text-left md:text-6xl">Nice to meet you!</p>
            <p className="text-2xl pb-2 mr-4 text-center md:text-left">The Wardrobe&apos;s Fall 2025 applications are now open. We look forward to receiving your application!</p>
            <div className="flex flex-col justify-center items-center md:justify-normal md:items-start">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf91U-MmoAPpMtTF0MB8EZG4mGrLYiBRacUDAkbGfA2paHhag/viewform" target="_blank" rel="noopener noreferrer">
                <button type="button" className="bg-blue-600 text-white-600 px-4 py-2 mt-4">
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
      {/* <div className="h-[60vh] xs:h-[65vh] md:h-screen grid grid-rows-2 gap-0 md:flex md:columns-2 px-4 md:px-8">
        <div className="flex w-screen items-center h-full md:w-[50vw]">
          <img src={recruitment_1} alt="Recruitment 1" className="object-contain h-full w-full" />
        </div>
        <div className="flex w-screen items-center h-full md:w-[50vw]">
          <img src={recruitment_2} alt="Recruitment 2" className="object-contain h-full w-full" />
        </div>
      </div> */}
    </div>
  );
}

export default Apply;