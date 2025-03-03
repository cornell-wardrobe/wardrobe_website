import React from "react";
import mediaInfographic from "../components/images/media/media-infographic.png";

function Media() {
  return (
    <div>
      {/* Donation Section */}
      <div className="w-screen bg-blue-100 py-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-black-700">Support The Wardrobe</h2>
        <p className="text-lg text-center mt-3 mx-5 md:w-2/3">
          Your contributions help students dress for success! <br />
          Whether youre in Ithaca or elsewhere, there are ways to support The Wardrobe.
        </p>
        <button
          // smooth transition for sliding down the page
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("donate");
            const offset = 100; 
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
          }}
          className="mt-5 bg-blue-600 text-white text-sm py-3 px-6 rounded-full">
          Learn How to Donate
        </button>
      </div>

      {/* Featured Section - Cornell Chronicle */}
      <div className="w-full flex justify-center">
        <div className="w-4/5 md:w-3/4 h-[60vh] md:h-[45vh] md:mb-0 mb-16 flex flex-col md:flex-row items-center">
          <div className="flex justify-center md:justify-end items-center md:w-1/2">
            <div className="text-center md:text-start md:w-full">
              <p className="text-3xl font-bold mt-5 mb-3">Featured on Cornell Chronicle</p>
              <div>
                {"Hundreds of students borrow professional clothes from The Wardrobe each semester, for reasons ranging from convenience to financial need."}
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
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <hr className="w-4/5 border-gray-300 " />
      </div>

      {/* Styling in Motion */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-4/5 md:w-3/4">
          <div>
            <p className="text-4xl font-bold">Styling in Motion</p>
            <p className="text-xl">{"Witness The Wardrobe's Work in Action"}</p>
          </div>
          <div className="h-auto w-auto flex items-center justify-center">
            <div className="md:w-4/5 lg:w-3/4">
              <img src={mediaInfographic} alt="Wardrobe Infographic" />
            </div>
          </div>
        </div>
      </div>

      {/* Donation Instructions */}
      <div id="donate" className="py-16 bg-gray-100 flex flex-col items-center">
        <div className="text-center w-4/5 md:w-2/3">
          <p className="text-xl text-blue-700">DONATIONS</p>
          <h2 className="my-2 text-4xl font-bold">How to Donate</h2>
          <p className="text-lg mt-3">
            Support The Wardrobe by donating either professional clothing or monetary contributions.
          </p>
        </div>

        <div className="mt-10 w-4/5 md:w-2/3 flex flex-col md:flex-row justify-center items-start gap-6">
          <div className="w-full md:w-1/2 bg-white shadow-md p-6 rounded-lg flex flex-col justify-between">
            <h3 className="text-2xl text-blue-700 text-center">In Ithaca</h3>
            <p className="text-center mt-2">
              You can drop off donations at:
            </p>
            <div className="bg-gray-200 p-3 rounded-md text-center mt-2">
              <p><strong>Barnes Hall, Room 210</strong></p>
              <p>8 AM - 4 PM </p>
              <p>Monday - Thursday</p>
            </div>
            <p className="text-center mt-2">
              A Cornell Career Services member will assist with your items.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white shadow-md p-6 rounded-lg flex flex-col justify-between">
            <h3 className="text-2xl text-blue-700 text-center">Outside Ithaca</h3>
            <p className="text-center mt-2">You can mail your clothing donations to:</p>
            <div className="bg-gray-200 p-3 rounded-md text-center mt-2">
              <p><strong>Cornell Wardrobe</strong></p>
              <p>Barnes Hall, 129 Ho Plaza</p>
              <p>Ithaca, NY 14853</p>
            </div>
            <p className="text-center mt-2">
              Your shipping fees will be reimbursed once you forward your receipt to 
              <a href="mailto:thewardrobe@cornell.edu" className="text-blue-600 underline"> thewardrobe@cornell.edu</a> 
              .
            </p>
          </div>
        </div>

        <div className="mt-10 w-4/5 md:w-2/3 bg-white shadow-md p-8 rounded-lg text-center">
          <h3 className="text-2xl text-blue-700">Monetary Support</h3>
          <p className="mt-3">
            Help us continue providing students with professional attire by making a financial contribution.
          </p>
          <div className="mt-5">
            <a 
              href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&bledit=1&dids=733."
              className="text-blue-600 underline text-lg font-semibold"
            >
              Donate Online
            </a>
          </div>
        </div>
      </div>
            

    </div>
    
  );
}

export default Media;
