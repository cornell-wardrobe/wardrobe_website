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
import ethanFrank from "../components/headshots/Ethan_Frank.jpg";
import elaineHong from "../components/headshots/Elaine_Hong.JPG";
import rachelEisenhart from "../components/headshots/Rachel_Eisenhart.jpg";
import estelleDalessio from "../components/headshots/Estelle_D'Alessio.jpeg";
import sofiaBonilla from "../components/headshots/Sofia_Bonilla.jpeg";
import yalaHuangFeng from "../components/headshots/Yala_Huang _Feng.png";
import memberdagba from "../components/headshots/Member_Dagba.png";
import senecasun from "../components/headshots/Seneca_Sun.JPG";
import suanchoi from "../components/headshots/Suan_Choi.jpg";
import alexweibly from "../components/headshots/Alex_Weibly.jpeg";
import sherrychen from "../components/headshots/Sherry_Chen.jpg";
import alexahan from "../components/headshots/Alexa_Hen.JPG";
import zahintasnin from "../components/headshots/Zahin_Tasnin.JPG";
import kainwang from "../components/headshots/Kain_Wang.JPG";
import benjaminloong from "../components/headshots/Benjamin_Loong.JPG";
import lauratwizere from "../components/headshots/Laura_Twizere.JPG";
import emilysavedoff from "../components/headshots/template.jpg";
import catherinedisque from "../components/headshots/Catherine_Disque.JPG";
import safowanaislam from "../components/headshots/template.jpg";
import michaelatteritano from "../components/headshots/template.jpg";
import sophieli from "../components/headshots/template.jpg";
import yunapark from "../components/headshots/template.jpg"; 



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
      image: kainwang,
    },
    {
      netID: "sb2677",
      name: "Sofia Bonilla",
      position: "Operations Associate",
      image: sofiaBonilla,
    },
    {
      netID: "eh698",
      name: "Elaine Hong",
      position: "Operations Associate",
      image: elaineHong,
    }
  ];

  const TECH = [
    {
      netID: "zt276",
      name: "Zahin Tasnin",
      position: "Technology Director",
      image: zahintasnin,
    },
    {
      netID: "mb2753",
      name: "Mohammed Bari",
      position: "Frontend Software Engineer",
      image: mohammedBari,
    },
    {
      netID: "yh2293",
      name: "Yala Huang Feng",
      position: "Frontend Software Engineer",
      image: yalaHuangFeng,
    },
  ];

  const MARKETING = [
    {
      netID: "mmk289",
      name: "Mel Khan",
      position: "Marketing Director",
      image: melKhan,
    },
    {
      netID: "mgl89",
      name: "Mia Lopez",
      position: "Marketing Director",
      image: miaLopez,
    },
    {
      netID: "gcc77",
      name: "Grace Carlson",
      position: "Marketing Associate",
      image: graceCarlson,
    },
    {
      netID: "sc3498",
      name: "Sherry Chen",
      position: "Marketing Associate",
      image: sherrychen,
    },
    {
      netID: "ash293",
      name: "Alexa Han",
      position: "Marketing Associate",
      image: alexahan,
    },
    {
      netID: "rse53",
      name: "Rachel Eisenhart",
      position: "Marketing Associate",
      image: rachelEisenhart,
    },
  ];

  const FINANCE = [
    {
      netID: "bjl99",
      name: "Benjamin Loong",
      position: "Financial Director",
      image: benjaminloong,
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
      image: estelleDalessio,
    },
    {
      netID: "sc3365",
      name: "Suan Choi",
      position: "Financial Analyst",
      image: suanchoi
    },
    {
      netID: "asw259",
      name: "Alex Weibly",
      position: "Financial Analyst",
      image: alexweibly
    },
    {
      netID: "is448",
      name: "Seneca Sun",
      position: "Financial Analyst",
      image: senecasun
    },
    {
      netID: "mfa52",
      name: "Michael Atteritano",
      position: "Financial Analyst",
      image: michaelatteritano
    },
  ];


  const EVENTS = [
    {
      netID: "ehs98",
      name: "Laura Twizere",
      position: "Events Director",
      image: lauratwizere,
    },
    {
      netID: "ehs98",
      name: "Emily Savedoff",
      position: "Events Director",
      image: emilysavedoff,
    },
    
    {
      netID: "sl2964",
      name: "Sophie Li",
      position: "Events Coordinator",
      image: sophieli,
    },
    {
      netID: "cad285",
      name: "Catherine Disque",
      position: "Events Coordinator",
      image: catherinedisque,
    },
    {
      netID: "mnd48",
      name: "Naomi Dagba",
      position: "Events Coordinator",
      image: memberdagba,
    },
    {
      netID: "sni9",
      name: "Safowana Islam",
      position: "Events Coordinator",
      image: safowanaislam,
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
