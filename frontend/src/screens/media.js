import React from "react";
import { Link } from "react-router-dom";

function Media() {
  return (
    <div>
      <div className="w-screen bg-slate-100 h-96 items-center">
        <div className="pt-12 pb-8 flex w-full" >
          <div className="flex ml-[22%] pr-10 float-left">
            <img class="h-48"
              src="https://assets-global.website-files.com/613b882ec820210e858b303b/64591f1debcfe571fdc2441c_janet-p-500.png"
              alt="Janet Mi Headshot">
            </img>
          </div>
          <div className="mr-[10%] items-right">
              <p className="text-xl text-blue-700">CAREER DEVELOPMENT</p>
              <p className="my-4 text-4xl font-bold med:text-5xl xl:text-6xl">The Wardrobe Mailbox</p>
              <p className="text-xl med:text-2xl">With Cornell Alumna: <span className="text-blue-700">Janet Mi</span></p>
              <a href="https://www.linkedin.com/pulse/wardrobe-mailbox-summer-internships-the-wardrobe-cornell/?trackingId=ETu4fr49%2BH%2BdcUsNWODfUQ%3D%3D">
                <p className="mb-10 text-blue-600">View Questions</p>
              </a>
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdSdPmkrGiVeUxDRotWtvVKNC1814ItInOwU58YSmuJLLvn8Q/viewform">
                  <button type="button" className="bg-blue-600 mt-4">
                    <p className="text-white text-sm my-4 mx-6">ASK AWAY</p>
                  </button>
                </Link>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <div className="pt-10 pb-10 flex ml-[17%]">
          <div className="pl-2.5 pr-2.5 w-4/12 float-left">
            <p className="text-3xl font-bold mt-5 mb-3">Featured on Cornell Chronicle</p>
            <div >
            "Hundreds of students borrow professional 
            clothes from the Wardrobe each semester, for 
            reasons ranging from convenience to financial need."
            </div>
            <a href="https://news.cornell.edu/stories/2023/01/wardrobe-provides-attire-any-student-any-opportunity">
              <p className="mb-10 text-blue-600"> Read More</p>
            </a>
          </div>
          <iframe width="460" 
            height="259" 
            src="https://www.youtube.com/embed/kT-vniQNyhE" 
            title="The Wardrobe helps students dress for success" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>

      </div>
      <div className="ml-[17%]">
        <p className="text-2xl md:text-3xl font-bold ">Styling in Motion</p>
        <p className="text-1xl ">Witness Wardrobe's Work in Action</p>
      </div>
      <div className="h-auto w-auto flex items-center justify-center">
        <div className="mx-auto w-4/5 md:w-2/3">
          <img
            src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/640145141131157ded7e4ea1_Wardrobe%20Lookbook%20FINAL.png"
            alt="Wardrobe Infographic">
          </img>
        </div>
      </div>
      {/* <div>
        <h2 className="text-3xl font-bold">
          Ask Us!
        </h2>
      </div> */}
    </div>
  );
}

export default Media;
