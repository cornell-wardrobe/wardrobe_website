import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PhotoPanel from "../components/photoPanel";
import homeMirror from "../components/images/landingPage/home_page_mirror.svg";
import heroRail from "../components/images/landingPage/hero_clothing_rail.svg";
import railLeft from "../components/images/landingPage/rail_edge_left.svg";
import railRight from "../components/images/landingPage/rail_edge_right.svg";
import homeRack from "../components/images/landingPage/home_rental_rack.svg";
import homeShop from "../components/images/landingPage/home_popup_shop.svg";
import homeStepOne from "../components/images/landingPage/home_step_one.svg"
import homeStepTwo from "../components/images/landingPage/home_step_two.svg"
import homeStepThree from "../components/images/landingPage/home_step_three.svg"
// import homeApply from "../components/images/landingPage/home_apply.svg"
// import Logo from "../components/images/wardrobe_logo.png"

// Short dotted connector between steps on tablet/mobile (the winding path takes over at xl).
function StepConnector({ accent = false }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center xl:hidden"
    >
      <span className="dotted-v h-9" />
      <span className={`h-3.5 w-3.5 rounded-full border-2 border-brand-blue ${accent ? "bg-butter" : "bg-cream"}`} />
    </div>
  );
}

StepConnector.propTypes = {
  accent: PropTypes.bool,
};

function Landingpage() {
  return (
    <div>
      <div>
        {/* <p className="bg-yellow-400 text-sm py-1 text-center md:text-base">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1mj5Y7e48TOwmiHi6GomNn9sJSfdAkiyH8wgzSS8t_D-cCg/viewform" className="underline font-semibold text-blue-700">
            APPLY NOW
          </a> to join our team!
        </p> */}
      </div>
      <div className="md:min-h-[calc(100vh-7rem)] flex flex-col md:flex-row">
        <PhotoPanel className="flex items-center md:w-1/2 pt-36 sm:pt-56 pb-16 md:py-12">
          <img
            src={heroRail}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 top-0 h-[120px] w-full object-cover object-top sm:h-auto sm:aspect-[720/200]"
          />
          <div className="px-6 md:px-12 text-center md:text-left">
            <p className="eyebrow text-xl">THE WARDROBE AT CORNELL</p>
            <h1 className="my-4 text-4xl sm:text-5xl xl:text-6xl">Pre-Professional Clothing For All Students</h1>
            <p className="text-xl md:text-2xl">Helping any student pursue any opportunity</p>
            <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-4">
              <Link to="/rent" className="btn-light whitespace-nowrap">
                RENT NOW
              </Link>
              <p className="max-w-[16rem] text-base leading-snug md:text-lg">
                <strong className="text-butter">Free</strong> rental professional attire for any occasion
              </p>
            </div>
            {/* <Link to="https://forms.gle/7Pq1t3Uc87oHvQYbA" target="_blank" rel="noopener noreferrer">
              <button type="button" className="bg-blue-600 mt-4 px-4 py-2">
                <p className="text-white text-sm my-4 mx-6">COFFEE CHAT</p>
              </button>
            </Link> */}
            <p></p>
            {/* <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe1mj5Y7e48TOwmiHi6GomNn9sJSfdAkiyH8wgzSS8t_D-cCg/viewform" target="_blank" rel="noopener noreferrer">
              <button type="button" className="bg-blue-600 mt-4 px-4 py-2">
                <p className="text-white text-sm my-4 mx-6">APPLY NOW</p>
              </button>
            </Link> */}
            {/* <Link to="https://cornell.campusgroups.com/Wardrobe/rsvp_boot?id=2277144" target="blank">
              <button type="button" className="bg-blue-600 mt-4 px-4 py-2">
                <p className="text-white text-sm my-4 mx-6">POP UP</p>
              </button>
          </Link> */}
          </div>
        </PhotoPanel>
        <div className="flex items-center justify-center bg-cream md:w-1/2 py-10 md:py-0">
          <img
            className="max-h-[70vh] w-auto max-w-full px-6"
            src={homeMirror}
            alt="Man staring in mirror">
          </img>
        </div>
      </div>
      <div className="bg-white py-16 border-b border-sand">
        <div className="flex justify-content items-center pb-8">
          <div className="text-center w-full px-4">
            <p className="eyebrow">WHAT WE DO</p>
            <h2 className="my-2 text-3xl sm:text-4xl md:text-5xl">Our Two Fold Approach</h2>
          </div>
        </div>
        {/* Thin clothing rail with faint garments at the outer edges (decorative) */}
        <div className="relative mb-8 h-[122px] overflow-hidden" aria-hidden="true">
          <div className="dots-edge absolute inset-0" />
          <div className="absolute inset-x-0 top-[16.5px] h-[3px] bg-charcoal/25" />
          <div className="absolute left-0 top-0 h-full w-[140px] overflow-hidden sm:w-[210px]">
            <img src={railLeft} alt="" className="h-[122px] w-[210px] max-w-none" />
          </div>
          <div className="absolute right-0 top-0 flex h-full w-[140px] justify-end overflow-hidden sm:w-[210px]">
            <img src={railRight} alt="" className="h-[122px] w-[210px] max-w-none shrink-0" />
          </div>
        </div>
        <div className="gap-12 grid sm:flex sm:columns-2 max-w-5xl mx-auto">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <img
                className="h-44 w-auto mx-auto max-w-full"
                src={homeRack}
                alt="A rolling rack of professional clothing: blazer, shirt, skirt, trousers and scarf">
              </img>
              <h3 className="text-3xl mt-6 mb-4">Rental Model</h3>
              <p className="mx-6">We provide free rental professional attire for any occasion to students throughout the semester. Take what you need
                and return it when you&apos;re done. We&apos;ll handle the cleaning!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <img
                className="h-44 w-auto mx-auto max-w-full"
                src={homeShop}
                alt="Pop-up shop stall with clothes and a shopper carrying a bag">
              </img>
              <h3 className="text-3xl mt-6 mb-4">Pop-Up Shop</h3>
              <p className="mx-6">Once a semester, we open a pop-up shop to give both used and new clothes to the student population.
                Everything is free and yours to keep!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cream pt-16 pb-6 flex justify-content items-center">
        <div className="text-center w-full px-4">
          <p className="eyebrow">THE PROCESS</p>
          <h2 className="my-2 text-3xl sm:text-4xl md:text-5xl">How it Works</h2>
        </div>
      </div>
      <div className="relative">
      <div className="relative bg-cream grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-10 pb-16 xl:pb-10 sm:min-h-[60vh] px-4">
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <img
              className="h-72 w-72 sm:h-96 sm:w-96 max-w-full mx-auto"
              src={homeStepOne}
              alt="Man staring at clipboards">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="text-center sm:text-left max-w-sm mx-auto sm:mx-0">
              <h3 className="text-2xl sm:text-3xl mb-4">Step One: Order</h3>
              <p className="">Place your order for the desired items, colors, and sizes using our rental form.
              </p>
            </div>
            <div className="hidden lg:block w-3/5">
              <p className="title text-5xl text-center text-brand-blue -rotate-90 hidden lg:flex">STEP ONE</p>
            </div>
          </div>
        </div>
        <StepConnector />
      </div>
      <div className="relative bg-cream grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-10 pb-16 xl:pb-10 sm:min-h-[60vh] px-4">
        <div className="flex items-center justify-center h-full order-2 sm:order-1">
          <div className="flex">
            <div className="hidden lg:block w-4/5">
              <p className="title text-5xl text-center text-brand-blue -rotate-90 hidden lg:flex">STEP TWO</p>
            </div>
            <div className="text-center sm:text-left max-w-sm mx-auto sm:mx-0 lg:-ml-16">
              <h3 className="text-2xl sm:text-3xl mb-4">Step Two: Wait</h3>
              <p className="">Wait for our team&apos;s response to your request. We&apos;ll get back to you within 48 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full order-1 sm:order-2">
          <div className="">
            <img
              className="h-72 w-72 sm:h-96 sm:w-96 max-w-full mx-auto"
              src={homeStepTwo}
              alt="Woman chatting">
            </img>
          </div>
        </div>
        <StepConnector />
      </div>
      <div className="relative bg-cream grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-10 pb-16 xl:pb-10 sm:min-h-[60vh] px-4">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <img
              className="h-72 w-72 sm:h-96 sm:w-96 max-w-full mx-auto"
              src={homeStepThree}
              alt="Woman holding a package">
            </img>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex">
            <div className="text-center sm:text-left max-w-sm mx-auto sm:mx-0">
              <h3 className="text-2xl sm:text-3xl mb-4">Step Three: Pick Up</h3>
              <p className="">Pick up your items at our Barnes Hall location and enjoy your attire!
              </p>
            </div>
            <div className="hidden lg:block w-3/5">
              <p className="title text-5xl text-center text-brand-blue -rotate-90 hidden lg:flex">STEP THREE</p>
            </div>
          </div>
        </div>
        <StepConnector accent />
      </div>
      {/* Winding dotted path through the three steps (xl screens). Runs down the gaps between
          image and text, never over them. Nodes are HTML so they stay round. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block"
        viewBox="0 0 100 300"
        preserveAspectRatio="none"
      >
        <path
          d="M44.4 3 L44.4 50 C44.4 100 55.6 100 55.6 150 C55.6 200 44.4 200 44.4 250 C44.4 275 50 282 50 297"
          fill="none"
          stroke="rgb(var(--color-blue))"
          strokeOpacity="0.65"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="0.1 11"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span aria-hidden="true" className="pointer-events-none absolute hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-blue bg-cream xl:block" style={{ left: "44.4%", top: "16.667%" }} />
      <span aria-hidden="true" className="pointer-events-none absolute hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-blue bg-cream xl:block" style={{ left: "55.6%", top: "50%" }} />
      <span aria-hidden="true" className="pointer-events-none absolute hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-blue bg-butter xl:block" style={{ left: "44.4%", top: "83.333%" }} />
      </div>
      <div className="bg-cream pt-2 pb-20 text-center">
        <Link to="/rent" className="btn">
          RENT NOW
        </Link>
      </div>
    </div>
  );
}

export default Landingpage;
