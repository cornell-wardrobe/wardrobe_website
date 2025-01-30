import React from "react";
import { Link } from "react-router-dom";
import janetMi from "../components/images/media/janet-mi-headshot.png";
import mediaInfographic from "../components/images/media/media-infographic.png";

function Media() {
  return (
    <div>
      <div className="w-screen md:h-[45vh] grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex items-center justify-center bg-slate-100 h-full md:w-2/5">
          <img className="h-48"
            src={janetMi}
            alt="Janet Mi Headshot">
          </img>
        </div>
        <div className="flex bg-slate-100 h-full justify-center items-center md:w-3/5">
          <div className="ml-7 text-center md:text-left">
            <p className="text-xl text-blue-700">CAREER DEVELOPMENT</p>
            <p className="my-4 text-4xl font-bold med:text-5xl xl:text-6xl">The Wardrobe Mailbox</p>
            <p className="text-xl med:text-2xl">With Cornell Alumna: <span className="text-blue-700">Janet Mi</span></p>
            <a href="https://www.linkedin.com/pulse/wardrobe-mailbox-summer-internships-the-wardrobe-cornell/?trackingId=ETu4fr49%2BH%2BdcUsNWODfUQ%3D%3D">
              <p className="mb-2 text-blue-600">View Questions</p>
            </a>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdSdPmkrGiVeUxDRotWtvVKNC1814ItInOwU58YSmuJLLvn8Q/viewform">
              <button type="button" className="bg-blue-600 mb-10 md:mb-0">
                <p className="text-white text-sm my-4 mx-6">ASK AWAY</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-screen h-[60vh] md:h-[45vh] md:mb-0 mb-16 grid grid-rows-2 gap-0 md:flex md:columns-2">
        <div className="flex justify-center md:justify-end items-center md:w-1/2">
          <div className="text-center mx-8 md:text-start md:w-2/3 md:mr-8">
            <p className="text-3xl font-bold mt-5 mb-3">Featured on Cornell Chronicle</p>
            <div >
            {"Hundreds of students borrow professional clothes from the Wardrobe each semester, for reasons ranging from convenience to financial need."}
            </div>
            <a href="https://news.cornell.edu/stories/2023/01/wardrobe-provides-attire-any-student-any-opportunity">
              <p className="mb-10 text-blue-600"> Read More</p>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center h-full md:w-1/2">
          <iframe width="370" 
            height="259" 
            src="https://www.youtube.com/embed/kT-vniQNyhE" 
            title="The Wardrobe helps students dress for success" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <div>
        <div className="ml-[17%] mt-8">
          <p className="text-4xl font-bold ">Styling in Motion</p>
          <p className="text-xl">{"Witness Wardrobe's Work in Action"}</p>
        </div>
        <div className="h-auto w-auto flex items-center justify-center">
          <div className="md:w-4/5 lg:w-3/4">
            <img
              src={mediaInfographic}
              alt="Wardrobe Infographic">
            </img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
