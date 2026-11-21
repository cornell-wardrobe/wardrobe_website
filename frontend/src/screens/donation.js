import React from "react";
import mediaInfographic from "../components/images/media/media-infographic.png";

function Media() {
  return (
    <div>
      {/* Donation Section */}
      <div className="w-full bg-white text-ink border-b-4 border-navy py-14 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mx-4">Support The Wardrobe</h2>
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
          className="btn mt-6 rounded-full">
          Learn How to Donate
        </button>
      </div>

      {/* Featured Section - Cornell Chronicle */}
      <div className="w-full flex justify-center">
        <div className="w-4/5 md:w-3/4 md:min-h-[45vh] py-12 flex flex-col md:flex-row items-center">
          <div className="flex justify-center md:justify-end items-center md:w-1/2">
            <div className="text-center md:text-start md:w-full">
              <h2 className="text-2xl sm:text-3xl mt-5 mb-3">Featured on Cornell Chronicle</h2>
              <div>
                {"Hundreds of students borrow professional clothes from The Wardrobe each semester, for reasons ranging from convenience to financial need."}
              </div>
              <a href="https://news.cornell.edu/stories/2023/01/wardrobe-provides-attire-any-student-any-opportunity">
                <p className="mb-10 font-bold underline underline-offset-4"> Read More</p>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center mt-4 md:mt-0 md:w-1/2">
            <iframe className="max-w-full h-auto aspect-[370/259]" width="370" 
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
        <hr className="w-4/5 border-sand" />
      </div>

      {/* Styling in Motion */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-4/5 md:w-3/4">
          <div>
            <h2 className="text-3xl sm:text-4xl">Styling in Motion</h2>
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
      <div id="donate" className="py-16 bg-sand flex flex-col items-center">
        <div className="text-center w-4/5 md:w-2/3">
          <p className="eyebrow eyebrow-chip">DONATIONS</p>
          <h2 className="my-2 text-3xl sm:text-4xl md:text-5xl">How to Donate</h2>
          <p className="text-lg mt-3">
            Support The Wardrobe by donating either professional clothing or monetary contributions.
          </p>
        </div>

        <div className="mt-10 w-4/5 md:w-2/3 flex flex-col md:flex-row justify-center items-start gap-6">
          <div className="w-full md:w-1/2 bg-white border border-charcoal/10 p-6 flex flex-col justify-between">
            <h3 className="text-2xl text-brand-blue text-center">In Ithaca</h3>
            <p className="text-center mt-2">
              You can drop off donations at:
            </p>
            <div className="bg-cream border border-sand p-3 text-center mt-2">
              <p><strong>Barnes Hall, Room 210</strong></p>
              <p>8 AM - 4 PM </p>
              <p>Monday - Thursday</p>
            </div>
            <p className="text-center mt-2">
              A Cornell Career Services member will assist with your items.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white border border-charcoal/10 p-6 flex flex-col justify-between">
            <h3 className="text-2xl text-brand-blue text-center">Outside Ithaca</h3>
            <p className="text-center mt-2">You can mail your clothing donations to:</p>
            <div className="bg-cream border border-sand p-3 text-center mt-2">
              <p><strong>Cornell Wardrobe</strong></p>
              <p>Barnes Hall, 129 Ho Plaza</p>
              <p>Ithaca, NY 14853</p>
            </div>
            <p className="text-center mt-2">
              Your shipping fees will be reimbursed once you forward your receipt to 
              <a href="mailto:thewardrobe@cornell.edu" className="text-brand-blue underline underline-offset-4 font-bold"> thewardrobe@cornell.edu</a> 
              .
            </p>
          </div>
        </div>

        <div className="on-dark mt-10 w-4/5 md:w-2/3 bg-navy text-white p-8 text-center">
          <h3 className="text-2xl text-white">Monetary Support</h3>
          <p className="mt-3">
            Help us continue providing students with professional attire by making a financial contribution.
          </p>
          <div className="mt-5">
            <a 
              href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&bledit=1&dids=733."
              className="text-white hover:text-butter underline underline-offset-4 text-lg font-bold"
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
