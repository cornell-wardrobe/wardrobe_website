import React from "react";
import { useState } from "react";
import People from "../components/people";

//management
import jessicaCaivano from "../components/headshots/Jessica_Caivano.JPG";
import melKhan from "../components/headshots/Mel_Khan.JPG";
import miaLopez from "../components/headshots/Mia_Lopez.JPG";



//operations
import synaSony from "../components/headshots/Syna_Sony.JPG";
import kainwang from "../components/headshots/Kain_Wang.JPG";
import sophialin from "../components/headshots/SophiaLin.jpg";
import isabellaLee from "../components/headshots/isabellaLee.jpg";
import ryanross from "../components/headshots/RyanRoss.jpg";
import lexieChen from "../components/headshots/lexieChen.jpg";
import ingachen from "../components/headshots/IngaChen.JPG";

//technology
import zahintasnin from "../components/headshots/Zahin_Tasnin.JPG";
import teresachen from "../components/headshots/TeresaChen.jpeg";

//marketing
import graceCarlson from "../components/headshots/Grace_Carlson.JPG";
import sherrychen from "../components/headshots/Sherry_Chen.jpg";
import suriwang from "../components/headshots/SuriWang.JPG";
import rachelEisenhart from "../components/headshots/Rachel_Eisenhart.jpg";

//finance
import diMa from "../components/headshots/diMa.JPG";
import xinqilian from "../components/headshots/XinQiLian.JPG";
import lavanyaLehl from "../components/headshots/LavanyaLehl.jpg";

//events
import emilysavedoff from "../components/headshots/EmilySavedoff.jpg";
import jessicaFrazendeiro from "../components/headshots/Jessica_Fazendeiro.png";
import sophiaJonisch from "../components/headshots/SophiaJonisch.jpg";







function Team() {
  const MANAGEMENT = [

    {
      netID: "jmc689",
      name: "Jessica Caivano",
      position: "President",
      image: jessicaCaivano,
      linkedin: "https://www.linkedin.com/in/jess-caivano/"
    },

    {
      netID: "mmk289",
      name: "Mel Khan",
      position: "VP Internal",
      image: melKhan,
      linkedin: "https://www.linkedin.com/in/melanie-khan-7387262ba/"
    
    },

    {
      netID: "mgl89",
      name: "Mia Lopez",
      position: "VP External",
      image: miaLopez,
      linkedin: "https://www.linkedin.com/in/mia-lopez4/"
    
    },

  ];

  const OPS = [
    {
      netID: "ss4352",
      name: "Syna Sony",
      position: "Operations Director",
      image: synaSony,
      linkedin: "https://www.linkedin.com/in/syna-sony-964b152a2/",
    },
    {
      netID: "kcw57",
      name: "Kain Wang",
      position: "Operations Director",
      image: kainwang,
      linkedin: "https://www.linkedin.com/in/kain-wang-4b8525349/"
    
    },
    {
      netID: "sophialin",
      name: "Sophia Lin",
      position: "Operations Associate",
      image: sophialin,
      linkedin: "www.linkedin.com/in/sophia-lin-a40421367"
    },

    {
      netID: "ryanross",
      name: "Ryan Ross",
      position: "Operations Associate/Financial Analyst",
      image: ryanross,
      linkedin: "https://www.linkedin.com/in/ryan-ross-b67621218/"
    },
    {
      netID: "ingachen",
      name: "Inga Chen",
      position: "Operations Associate",
      image: ingachen,
      linkedin: "https://www.linkedin.com/in/inga-chen-175131326?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
      netID: "isabella",
      name: "Isabella Lee",
      position: "Operations Associate",
      image: isabellaLee,
      linkedin: "www.linkedin.com/in/ isabella-lee928",
    },
    {
      netID: "lexieChen",
      name: "Lexie Chen",
      position: "Operations Associate",
      image: lexieChen,
      linkedin: "https://www.linkedin.com/in/lexie-chen/"
    }
  ];

  const TECH = [
    {
      netID: "zt276",
      name: "Zahin Tasnin",
      position: "Technology Director",
      image: zahintasnin,
      linkedin: "https://www.linkedin.com/in/zahintasnin/"
    },
    
    {
      netID: "teresachen",
      name: "Teresa Chen",
      position: "Frontend Software Engineer",
      image: teresachen,
      linkedin: "https://www.linkedin.com/in/teresa-chen0927?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  const MARKETING = [
    
    {
      netID: "gcc77",
      name: "Grace Carlson",
      position: "Marketing Director",
      image: graceCarlson,
      linkedin: "https://www.linkedin.com/in/grace-carlson-625679328/",
    
    },

    {
      netID: "suriwang",
      name: "Suri Wang",
      position: "Marketing Director",
      image: suriwang,
      linkedin: "https://www.linkedin.com/in/suri-wang-0682972b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    
    {
      netID: "sc3498",
      name: "Sherry Chen",
      position: "Marketing Associate",
      image: sherrychen,
      linkedin: "http://linkedin.com/in/sherry-chen0772",
    },
    {
      netID: "rse53",
      name: "Rachel Eisenhart",
      position: "Photographer",
      image: rachelEisenhart,
      linkedin: "https://www.linkedin.com/in/r-eisenhart/",
    },
    
  ];

  const FINANCE = [
    
    {
      netID: "dima",
      name: "Di Ma",
      position: "Finance Director",
      image: diMa,
      linkedin: "linkedin.com/in/didima/",
    },

    {
      netID: "",
      name: "Xin Qi Lian",
      position: "Financial Analyst",
      image: xinqilian,
      linkedin: "linkedin.com/in/xinqilian"
    },
    
    {
      netID: "ryanross",
      name: "Ryan Ross",
      position: "Financial Analyst/Operations Associate",
      image: ryanross,
      linkedin: "https://www.linkedin.com/in/ryan-ross-b67621218/"
    },

    {
      netID: "",
      name: "Lavanya Lehl",
      position: "Events Coordinator",
      image: lavanyaLehl,
      linkedin: "https://www.linkedin.com/in/lavanya-lehl/",
    },

  ];
  const EVENTS = [
    {
      netID: "ehs98",
      name: "Emily Savedoff",
      position: "Events Director",
      image: emilysavedoff,
      linkedin: "https://www.linkedin.com/in/emilysavedoff/"
    },
    
    {
      netID:"",
      name: "Jessica Fazendeiro",
      position: "Events Coordinator",
      image: jessicaFrazendeiro,
      linkedin: "www.linkedin.com/in/jessica-fazendeiro",
    },
    {
      netID:"",
      name: "Sophia Jonisch", 
      position: "Events Coordinator",
      image: sophiaJonisch,
      linkedin: "https://www.linkedin.com/in/sophiajonisch/",
    },
  ];

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
