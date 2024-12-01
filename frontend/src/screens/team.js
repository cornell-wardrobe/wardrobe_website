import React from "react";
import { useState } from "react";
import People from "../components/people";
import alexChen from "../components/headshots/Alex_Chen.png";
import claraKennedy from "../components/headshots/Clara_Kennedy.png";
import jennyChen from "../components/headshots/Jenny_Chen.png";
import javohirAbdurazzakov from "../components/headshots/Javohir_Abdurazzakov.jpg";
import maryamAlbakry from "../components/headshots/Maryam_Albakry.png";
import allisonZheng from "../components/headshots/Allison_Zheng.png";
import kylieHuber from "../components/headshots/Kylie_Huber.png";
import snehaSinghi from "../components/headshots/Sneha_Singhi.png";
import ashleySosa from "../components/headshots/Ashley_Sosa.jpeg";
import emilyChen from "../components/headshots/Emily_Chen.png";
import taliaPerkins from "../components/headshots/Talia_Perkins.jpg";
import nicoletteGani from "../components/headshots/Nicolette_Gani.jpg";
import bernadetteBatuncang from "../components/headshots/Bernadette_Batuncang.jpg"
import carrieZheng from "../components/headshots/Carrie_Zheng.jpg"
import helenLin from "../components/headshots/Helen_Lin.jpg"
import kathereenYang from "../components/headshots/Kathereen_Yang.jpg"
import nicoleParafati from "../components/headshots/Nicole_Parafati.jpg"
import oliviaKalu from "../components/headshots/Olivia_Kalu.jpg"
import stellaMuthoni from "../components/headshots/Stella_Muthoni.jpg"
import juliaKundu from "../components/headshots/Julia_Kundu.jpg"
import timmyXi from "../components/headshots/Timmy_Xi.jpg"
import manrajSingh from "../components/headshots/Manraj_Singh.jpg"
import advikaPrasad from "../components/headshots/Advika_Prasad.JPG"
import emilyEng from "../components/headshots/Emily_Eng.png"
import victoriaMocarski from "../components/headshots/Victoria_Mocarski.JPG"
import katherineSon from "../components/headshots/Katherine_Son.JPG"
import rileyAuman from "../components/headshots/Riley_Auman.JPG"
import edenDaniel from "../components/headshots/Eden_Daniel.JPG"
import mohammedBari from "../components/headshots/Mohammed_Bari.JPG"
import synaSony from "../components/headshots/Syna_Sony.JPG"
import nataliaOstapowicz from "../components/headshots/Natalia_Ostapowicz.JPG"
import catherineDisque from "../components/headshots/Catherine_Disque.JPG"
import lauraTwizere from "../components/headshots/Laura_Twizere.JPG"
import erikaChin from "../components/headshots/Erika_Chin.JPG";
import jessicaCaivano from "../components/headshots/Jessica_Caivano.JPG";
import jennyHuang from "../components/headshots/Jenny_Huang.JPG";
import benCornejo from "../components/headshots/Carlos_Ben_Cornejo.JPG";
import avaTafreshi from "../components/headshots/Ava_Tafreshi.JPG";
import miaLopez from "../components/headshots/Mia_Lopez.JPG";
import nikitaChavan from "../components/headshots/Nikita_Chavan.JPG";
import lindsayWang from "../components/headshots/Lindsay_Wang.JPG";
import cindyXu from "../components/headshots/Cindy_Xu.JPG";
import melKhan from "../components/headshots/Mel_Khan.JPG";
import alexChou from "../components/headshots/Alex_Chou.JPG";
import graceCarlson from "../components/headshots/Grace_Carlson.JPG";


function Team() {
  const MANAGEMENT = [
    {
      netID: "ma878",
      name: "Maryam Albakry",
      position: "President",
      image: maryamAlbakry,
    },
    {
      netID: "twp46",
      name: "Talia Perkins",
      position: "Vice President",
      image: taliaPerkins,
    },
  ];

  const OPS = [
    {
      netID: "akc58",
      name: "Alex Chen",
      position: "Operations Director",
      image: alexChen,
    },
    {
      netID: "kfh34",
      name: "Kylie Huber",
      position: "Operations Associate",
      image: kylieHuber,
    },
    {
      netID: "clk234",
      name: "Clara Kennedy",
      position: "Operations Associate",
      image: claraKennedy,
    },
    {
      netID: "vpm29",
      name: "Victoria Mocarski",
      position: "Operations Associate",
      image: victoriaMocarski,
    },
    {
      netID: "llw65",
      name: "Lindsay Wang",
      position: "Operations Associate",
      image: lindsayWang,
    },
    {
      netID: "ss4352",
      name: "Syna Sony",
      position: "Operations Associate",
      image: synaSony,
    },
    {
      netID: "apc97",
      name: "Alex Chou",
      position: "Operations Associate",
      image: alexChou,
    },
  ];

  const TECH = [
    {
      netID: "jc2676",
      name: "Jenny Chen",
      position: "Technology Director",
      image: jennyChen,
    },
    {
      netID: "ja688",
      name: "Javohir Abdurazzakov",
      position: "Frontend Software Engineer",
      image: javohirAbdurazzakov,
    },
    {
      netID: "axz5",
      name: "Allison Zheng",
      position: "Frontend Software Engineer",
      image: allisonZheng,
    },
    {
      netID: "jk2578",
      name: "Julia Kundu",
      position: "Frontend Software Engineer",
      image: juliaKundu,
    },
    {
      netID: "mb2753",
      name: "Mohammed Bari",
      position: "Full Stack Software Engineer",
      image: mohammedBari,
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
      netID: "nmp68",
      name: "Nicole Parafati",
      position: "Marketing Director",
      image: nicoleParafati,
    },
    {
      netID: "jky27",
      name: "Kathereen Yang",
      position: "Marketing Associate",
      image: kathereenYang,
    },
    {
      netID: "bgb66",
      name: "Bernadette Batuncang",
      position: "Social Media Associate",
      image: bernadetteBatuncang,
    },
    {
      netID: "hl2392",
      name: "Helen Lin",
      position: "Graphic Designer",
      image: helenLin,
    },
    {
      netID: "tjx2",
      name: "Timmy Xi",
      position: "Photographer",
      image: timmyXi,
    },
    {
      netID: "ant63",
      name: "Ava Tafreshi",
      position: "Marketing Associate",
      image: avaTafreshi,
    },
    {
      netID: "mgl89",
      name: "Mia Lopez",
      position: "Marketing Associate",
      image: miaLopez,
    },
    {
      netID: "nmc92",
      name: "Nikita Chavan",
      position: "Marketing Associate",
      image: nikitaChavan,
    },
    {
      netID: "cx79",
      name: "Cindy Xu",
      position: "Marketing Associate",
      image: cindyXu,
    },
    {
      netID: "gcc77",
      name: "Grace Carlson",
      position: "Social Media Associate",
      image: graceCarlson,
    },
  ];

  const FINANCE = [
    {
      netID: "no235",
      name: "Natalia Ostapowicz",
      position: "Financial Co-Director",
      image: nataliaOstapowicz,
    },
    {
      netID: "ss3298",
      name: "Sneha Singhi",
      position: "Finance Co-Director",
      image: snehaSinghi,
    },
    {
      netID: "no235",
      name: "Natalia Ostapowicz",
      position: "Finance Co-Director",
      image: nataliaOstapowicz,
    },
    {
      netID: "ms3263",
      name: "Manraj Singh",
      position: "Financial Co-Director",
      image: manrajSingh,
    },
    {
      netID: "cz376",
      name: "Carrie Zheng",
      position: "Financial Analyst",
      image: carrieZheng,
    },
    {
      netID: "sm2493",
      name: "Stella Muthoni",
      position: "Financial Analyst",
      image: stellaMuthoni,
    },
    {
      netID: "ap2373",
      name: "Advika Prasad",
      position: "Financial Analyst",
      image: advikaPrasad,
    },
    {
      netID: "ege25",
      name: "Emily Eng",
      position: "Financial Analyst",
      image: emilyEng,
    },
    {
      netID: "ejc245",
      name: "Erika Chin",
      position: "Financial Analyst",
      image: erikaChin,
    },
    {
      netID: "cbc96",
      name: "Ben Cornejo",
      position: "Financial Analyst",
      image: benCornejo,
    },
    {
      netID: "ks2395",
      name: "Katherine Son",
      position: "Financial Analyst",
      image: katherineSon,
    },
  ];

  const EVENTS = [
    {
      netID: "ok55",
      name: "Olivia Kalu",
      position: "Events Director",
      image: oliviaKalu,
    },
    {
      netID: "ajs573",
      name: "Ashley Sosa",
      position: "Events Coordinator",
      image: ashleySosa,
    },
    {
      netID: "ec879",
      name: "Emily Chen",
      position: "Events Coordinator",
      image: emilyChen,
    },
    {
      netID: "jmc689",
      name: "Jessica Caivano",
      position: "Events Coordinator",
      image: jessicaCaivano,
    },
    {
      netID: "jh2894",
      name: "Jenny Huang",
      position: "Events Coordinator",
      image: jennyHuang,
    },
    {
      netID: "rca78",
      name: "Riley Auman",
      position: "Events Coordinator",
      image: rileyAuman,
    },
    {
      netID: "etd32",
      name: "Eden Daniel",
      position: "Events Coordinator",
      image: edenDaniel,
    },
    {
      netID: "cad285",
      name: "Catherine Disque",
      position: "Events Coordinator",
      image: catherineDisque,
    },
    {
      netID: "lat95",
      name: "Laura Twizere",
      position: "Events Coordinator",
      image: lauraTwizere,
    },
  ];

  const EXPANSION = [
    {
      netID: "nig22",
      name: "Nicolette Gani",
      position: "Expansion Director",
      image: nicoletteGani,
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
          <button
            className={
              activeTab === 6
                ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0"
                : "tab font-bold px-2 pt-2 !ml-0"
            }
            onClick={() => handleTabClick(6)}
          >
            Expansion
          </button>
        </div>
        <div className="tab-content ">
          {activeTab === 0 && <People items={MANAGEMENT} />}
          {activeTab === 1 && <People items={OPS} />}
          {activeTab === 2 && <People items={TECH} />}
          {activeTab === 3 && <People items={MARKETING} />}
          {activeTab === 4 && <People items={FINANCE} />}
          {activeTab === 5 && <People items={EVENTS} />}
          {activeTab === 6 && <People items={EXPANSION} />}
        </div>
      </div>
    </div>
  );
}

export default Team;
