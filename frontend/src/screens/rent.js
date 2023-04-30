import React from "react";
import { Link } from "react-router-dom";

function Rent() {
  return (
    <div className="pt-10 max-w-screen-lg mx-auto">
      <div className="flex flex-row items-center ml-10 mr-10">
        <div className="pl-2.5 pr-2.5 w-6/12 float-left">
          <p className="text-3xl font-bold mt-5 mb-3">Looking for attire?</p>
          <div className="mb-10">
            Fill out our rental form for the desired items at least 48 hours in advance. 
            Our team will respond promptly with a pickup date, location, and return date. 
            We look forward to hearing from you!
          </div>
          <a className="bg-blue-700 text-white px-10 py-5" href="https://forms.gle/bvHDuMR7LcJPcgRo8">
            RENT
          </a>
        </div>
        <div className="pl-2.5 pr-2.5 w-6/12 float-left">
          <img className="max-w-full align-middle inline-block w-96" src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613d59cb39123e2f3bde7476_undraw_Receipt_re_fre3.svg" alt="post">
          </img>
        </div>
      </div>
      <div className="pt-10">
        <div>
          <p className="text-3xl font-bold mt-5 mb-3 text-center">Unsure of size?</p>
          <p className="text-center">Use our fitting guide to help find what's most comfortable for you.</p>
          <div className="mt-10 text-center">
            <img className="align-middle max-w-full text-center mx-auto" src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613d5b66f40b1c1929ed78b6_Size%20guide%20(1).png" alt="size"></img>
          </div>
        </div>
        <div>
          <div className="text-center max-w-screen-md px-3 mx-auto">
            <p className="text-center text-2xl font-semibold mt-5 mb-3">Men's Sizes</p>
            <img className="text-center align-middle inline-block" src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613d5c4609bd536cade36433_MENS%20SIZE.jpg" alt="msize">
            </img>
          </div>
          <div className="text-center max-w-screen-md px-3 mx-auto">
            <p className="text-center text-2xl font-semibold mt-5 mb-3">Women's Sizes</p>
            <img className="text-center align-middle inline-block" src="https://uploads-ssl.webflow.com/613b882ec820210e858b303b/613d5c5d66b46f27fc6fa789_WOMENS%20SIZE.jpg" alt="fsize"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
