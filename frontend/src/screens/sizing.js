import React from "react";
import rentFindYourFit from "../components/images/rent/rent-find-your-fit.png";
import rentMensSize from "../components/images/rent/rent-mens-size.jpeg";
import rentWomensSize from "../components/images/rent/rent-womens-size.jpeg";

function Sizing() {
  return (
    <div className="pt-10 max-w-screen-lg mx-auto">
      <div className="flex flex-row items-center ml-10 mr-10">
        <div className="pl-2.5 pr-2.5 w-6/12 float-center">
          <p className="text-3xl font-bold mt-5 mb-3">Sizing Guide</p>
            <div className="pt-10">
                <div>
                    <p className="text-3xl font-bold mt-5 mb-3 text-center">Unsure of size?</p>
                    <p className="text-center">Use our fitting guide to help find what's most comfortable for you.</p>
                    <div className="mt-10 text-center">
                        <img className="align-middle max-w-full text-center mx-auto" 
                            src={rentFindYourFit} 
                            alt="size"></img>
                    </div>
                </div>
                <div>
                    <div className="text-center max-w-screen-md px-3 mx-auto">
                        <p className="text-center text-2xl font-semibold mt-5 mb-3">Men's Sizes</p>
                        <img className="text-center align-middle inline-block" 
                            src={rentMensSize} 
                            alt="msize">
                        </img>
                    </div>
                    <div className="text-center max-w-screen-md px-3 mx-auto">
                        <p className="text-center text-2xl font-semibold mt-5 mb-3">Women's Sizes</p>
                        <img className="text-center align-middle inline-block" 
                            src={rentWomensSize} 
                            alt="fsize"></img>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
}

export default Sizing;