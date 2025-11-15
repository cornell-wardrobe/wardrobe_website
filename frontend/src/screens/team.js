import React from "react";
import { useState } from "react";
import People from "../components/people";
import katherineSon from "../components/headshots/Katherine_Son.JPG"
import mohammedBari from "../components/headshots/Mohammed_Bari.JPG"
import synaSony from "../components/headshots/Syna_Sony.JPG"
import erikaChin from "../components/headshots/Erika_Chin.JPG";
import jessicaCaivano from "../components/headshots/Jessica_Caivano.JPG";
import miaLopez from "../components/headshots/Mia_Lopez.JPG";
import melKhan from "../components/headshots/Mel_Khan.JPG";
import graceCarlson from "../components/headshots/Grace_Carlson.JPG";
import ethanFrank from "../components/headshots/Ethan_Frank.JPG";


function Team() {
  const MANAGEMENT = [
    {
      netID: "ejc245",
      name: "Erika Chin",
      position: "President",
      image: erikaChin,
    },

    {
      netID: "jmc689",
      name: "Jessica Caivano",
      position: "Vice President",
      image: jessicaCaivano,
    },

    {
      netID: "esf77",
      name: "Ethan Frank",
      position: "VP External Affairs",
      image: ethanFrank,
    },
  ];

  const OPS = [
    {
      netID: "ss4352",
      name: "Syna Sony",
      position: "Operations Director",
      image: synaSony,
    },
    {
      netID: "kcw57",
      name: "Kain Wang",
      position: "Operations Director",

    },
    {
      netID: "sb2677",
      name: "Sofia Bonilla",
      position: "Operations Associate",
    },
    {
      netID: "eh698",
      name: "Elaine Hong",
      position: "Operations Associate",

    }
  ];

  const TECH = [
    {
      netID: "mb2753",
      name: "Mohammed Bari",
      position: "Technology Director",
      image: mohammedBari,
    },
    {
      netID: "zt276",
      name: "Zahin Tasnin",
      position: "Frontend Software Engineer",
    },
    {
      netID: "yh2293",
      name: "Yala Huang Feng",
      position: "Frontend Software Engineer",
    },
  ];

  const MARKETING = [
    {
      netID: "mmk289",
      name: "Melanie Kahn",
      position: "Marketing Director",
      image: melKhan,
    },
    {
      netID: "mgl89",
      name: "Mia Lopez",
      position: "Marketing Associate",
      image: miaLopez,
    },
    {
      netID: "gcc77",
      name: "Grace Carlson",
      position: "Marketing Associate",
      image: graceCarlson,
    },
    {
      netID: "yp468",
      name: "Yuna Park",
      position: "Marketing Associate",
    },
    {
      netID: "sc3498",
      name: "Sherry Chen",
      position: "Marketing Associate",
    },
    {
      netID: "ash293",
      name: "Alexa Han",
      position: "Marketing Associate",
    },
    {
      netID: "rse53",
      name: "Rachel Eisenhart",
      position: "Marketing Associate",
    },
  ];

  const FINANCE = [
    {
      netID: "bjl99",
      name: "Benjamin Loong",
      position: "Financial Director",
    },
    {
      netID: "ks2395",
      name: "Katherin Son",
      position: "Finance Director",
      image: katherineSon,
    },
    {
      netID: "ed549",
      name: "Estelle D’Alessio",
      position: "Finance Analyst",
    },
    {
      netID: "sc3365",
      name: "Suan Choi",
      position: "Financial Analyst",

    },
    {
      netID: "asw259",
      name: "Alex Weibly",
      position: "Financial Analyst",

    },
    {
      netID: "is448",
      name: "Seneca Sun",
      position: "Financial Analyst",

    },
    {
      netID: "mfa52",
      name: "Michael Atteritano",
      position: "Financial Analyst",

    },
  ];

  const EVENTS = [
    {
      netID: "jmc689",
      name: "Jessica Caivano",
      position: "Events Coordinator",
      image: jessicaCaivano,
    },
    {
      netID: "sl2964",
      name: "Sophie Li",
      position: "Events Coordinator",
    },
    {
      netID: "cad285",
      name: "Catherine Disque",
      position: "Events Coordinator",
    },
    {
      netID: "esf77",
      name: "Ethan Frank",
      position: "Events Coordinator",
    },
    {
      netID: "mnd48",
      name: "Naomi Dagba",
      position: "Events Coordinator",
    },
    {
      netID: "ehs98",
      name: "Emily Savedoff",
      position: "Events Director",
    },
    {
      netID: "sni9",
      name: "Safowana Islam",
      position: "Events Coordinator",
    },
    {
      netID: "ehs98",
      name: "Laura Twizere",
      position: "Events Director",
    },
  ];
;

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-col ">
      <div className=" ml-[17%]">
        <div className="w-full ">
          <p className="text-4xl font-bold mt-7">Meet The Team</p>
          <p className="text-1xl mb-3">The faces behind the Wardrobe</p>
        </div>
        <div className="tabs flex space-x-4 flex-wrap">
          <button
            className={
              activeTab === 0
                ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !mr-4"
                : "tab font-bold px-2 pt-2 !mr-4"
            }
            onClick={() => handleTabClick(0)}
          >
            Management
          </button>
          <button
            className={
              activeTab === 1
                ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4"
                : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(1)}
          >
            Operations
          </button>
          <button
            className={
              activeTab === 2
                ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4"
                : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(2)}
          >
            Technology
          </button>
          <button
            className={
              activeTab === 3
                ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4"
                : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(3)}
          >
            Marketing
          </button>
          <button
            className={
              activeTab === 4
                ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4"
                : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(4)}
          >
            Finance
          </button>
          <button
            className={
              activeTab === 5
                ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4"
                : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(5)}
          >
            Events
          </button>
        </div>
        <div className="tab-content ">
          {activeTab === 0 && <People items={MANAGEMENT} />}
          {activeTab === 1 && <People items={OPS} />}
          {activeTab === 2 && <People items={TECH} />}
          {activeTab === 3 && <People items={MARKETING} />}
          {activeTab === 4 && <People items={FINANCE} />}
          {activeTab === 5 && <People items={EVENTS} />}
        </div>
      </div>
    </div>
  );
}

export default Team;
