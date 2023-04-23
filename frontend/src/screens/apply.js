import React from "react";
import { Link } from "react-router-dom";

function Apply() {
  return (
    <div>
      <div className="h-screen gap-0 columns-2">
        <div className="flex bg-slate-100 items-center h-full w-screen">
          <div className="ml-7">
            <p className="text-6xl font-bold">Nice to meet you!</p>
            <p className="text-2xl pt-2 mr-4">Positions for SP23 are closed, join us next semester!</p>
            <div>
              <Link to="/apply">
                <button type="button" className="bg-blue-600 mt-4 px-4 py-2">
                  <p className="text-white text-sm my-4 mx-6">APPLY</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex bg-slate-100 items-center justify-center">
          <img
            className="scale-90" src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613d3750c3defc990e271119_undraw_social_friends_nsbv.svg">
          </img>
        </div>
      </div>
      <div className="h-screen">
        <div className="flex justify-content items-center">
          <div className="text-center w-screen">
            <p className="text-3xl font-bold">Want to know more?</p>
            <p className="my-2 text-xl pt-2 pr-40 pl-40">Coffee chat with us! You can find the NetID’s of Wardrobe members on the Team Page. Feel free to reach out to anyone, we would all be thrilled to meet you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
