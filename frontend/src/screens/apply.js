import React from "react";
import PhotoPanel from "../components/photoPanel";
import applyFirst from "../components/images/apply/apply-first.svg";
// import recruitment_1 from "../components/images/apply/recruitment_1.png"
// import recruitment_2 from "../components/images/apply/recruitment_2.png"

function Apply() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-7rem)]">
        <PhotoPanel className="flex w-full items-center py-16 md:w-1/2 md:py-12">
          <div className="panel-light mx-5 md:mx-12 px-6 py-10 md:px-10 md:py-14 w-full">
            <h1 className="text-4xl sm:text-5xl pb-3 text-center md:text-left md:text-6xl">Nice to meet you!</h1>
            <p className="text-xl md:text-2xl pb-4 text-center md:text-left">The Wardrobe&apos;s Spring 2026 applications are now open!</p>
            <div className="flex flex-col justify-center items-center md:justify-normal md:items-start">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1mj5Y7e48TOwmiHi6GomNn9sJSfdAkiyH8wgzSS8t_D-cCg/viewform" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn">
                  <p>APPLY</p>
                </button>
              </a> 
            </div>
          </div>
        </PhotoPanel>
        <div className="flex items-center justify-center bg-cream py-10 md:w-1/2 md:py-0">
          <img
            className="max-h-[70vh] w-auto max-w-full px-6"
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