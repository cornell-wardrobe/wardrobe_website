import React from "react";
import { useState } from "react";
import People from "../components/people";
import alexChen from "../components/headshots/Alex_Chen.png";
import laurenSong from "../components/headshots/Lauren_Song.png";
import claraKennedy from "../components/headshots/Clara_Kennedy.png";
import jennyChen from "../components/headshots/Jenny_Chen.png";
import javohirAbdurazzakov from "../components/headshots/Javohir_Abdurazzakov.jpg";
import maryamAlbakry from "../components/headshots/Maryam_Albakry.png";
import allisonZheng from "../components/headshots/Allison_Zheng.png";
import kylieHuber from "../components/headshots/Kylie_Huber.png";
import melanieKhan from "../components/headshots/Melanie_Khan.png";
import snehaSinghi from "../components/headshots/Sneha_Singhi.png";
import ashleySosa from "../components/headshots/Ashley_Sosa.jpeg";
import emilyChen from "../components/headshots/Emily_Chen.png";
import taliaPerkins from "../components/headshots/Talia_Perkins.JPG";
import nicoletteGani from "../components/headshots/Nicolette_Gani.jpg";
import annemarieEhrenreich from "../components/headshots/AnneMarie_Ehrenreich.jpg";
import bernadetteBatuncang from "../components/headshots/Bernadette_Batuncang.jpg";
import carrieZheng from "../components/headshots/Carrie_Zheng.jpg";
import atkinsDube from "../components/headshots/Atkins_Dube.jpg";
import fannyZheng from "../components/headshots/Fanny_Zheng.jpg";
import helenLin from "../components/headshots/Helen_Lin.jpg";
import kathereenYang from "../components/headshots/Kathereen_Yang.jpg";
import kellyZeng from "../components/headshots/Kelly_Zeng.jpg";
import leonorRobalino from "../components/headshots/Leonor_Robalino.jpg";
import natalieKaplan from "../components/headshots/Natalie_Kaplan.jpg";
import nicoleParafati from "../components/headshots/Nicole_Parafati.JPG";
import nicoleYan from "../components/headshots/Nicole_Yan.jpg";
import oliviaKalu from "../components/headshots/Olivia_Kalu.jpg";
import sinnyYe from "../components/headshots/Sinny_Ye.jpg";
import stellaMuthoni from "../components/headshots/Stella_Muthoni.jpg";
import stephanieDong from "../components/headshots/Stephanie_Dong.jpg";
import juliaKundu from "../components/headshots/Julia_Kundu.jpg";
import timmyXi from "../components/headshots/Timmy_Xi.jpg";
import manrajSingh from "../components/headshots/Manraj_Singh.jpg";
import advikaPrasad from "../components/headshots/Advika_Prasad.JPG";
import erikaChin from "../components/headshots/Erika_Chin.JPG";
import jessicaCaivano from "../components/headshots/Jessica_Caivano.JPG";
import jennyHuang from "../components/headshots/Jenny_Huang.JPG";
import benCornejo from "../components/headshots/Carlos_Ben_Cornejo.JPG";
import avaTafreshi from "../components/headshots/Ava_Tafreshi.JPG";
import miaLopez from "../components/headshots/Mia_Lopez.JPG";
import nikitaChavan from "../components/headshots/Nikita_Chavan.JPG";
import lindsayWang from "../components/headshots/Lindsay_Wang.JPG";
import cindyXu from "../components/headshots/Cindy_Xu.JPG";

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
      netID: "lqs2",
      name: "Lauren Song",
      position: "Operations Associate",
      image: laurenSong,
    },
    {
      netID: "clk234",
      name: "Clara Kennedy",
      position: "Operations Associate",
      image: claraKennedy,
    },
    {
      netID: "kz268",
      name: "Kelly Zeng",
      position: "Operations Associate",
      image: kellyZeng,
    },
    {
      netID: "ny228",
      name: "Nicole Yan",
      position: "Operations Associate",
      image: nicoleYan,
    },
    {
      netID: "llw65",
      name: "Lindsay Wang",
      position: "Operations Associate",
      image: lindsayWang,
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
      netID: "akd74",
      name: "Atkins Dube",
      position: "Full Stack Software Engineer",
      image: atkinsDube,
    },
    {
      netID: "njk82",
      name: "Natalie Kaplan",
      position: "Full Stack Software Engineer",
      image: natalieKaplan,
    },
  ];

  const MARKETING = [
    {
      netID: "mmk289",
      name: "Melanie Kahn",
      position: "Marketing Director",
      image: melanieKhan,
    },
    {
      netID: "nmp68",
      name: "Nicole Parafati",
      position: "Marketing Director",
      image: nicoleParafati,
    },
    {
      netID: "aae43",
      name: "Anne Marie Ehrenreich",
      position: "Marketing Associate",
      image: annemarieEhrenreich,
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
      netID: "lr447",
      name: "Leonor Robalino",
      position: "Graphic Designer",
      image: leonorRobalino,
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
  ];

  const FINANCE = [
    {
      netID: "ss3298",
      name: "Sneha Singhi",
      position: "Finance Co-Director",
      image: snehaSinghi,
    },
    {
      netID: "ms3263",
      name: "Manraj Singh",
      position: "Financial Co-Director",
      image: manrajSingh,
    },
    {
      netID: "sy544",
      name: "Sinny Ye",
      position: "Financial Analyst",
      image: sinnyYe,
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
      netID: "sd946",
      name: "Stephanie Dong",
      position: "Financial Analyst",
      image: stephanieDong,
    },
    {
      netID: "ap2373",
      name: "Advika Prasad",
      position: "Financial Analyst",
      image: advikaPrasad,
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
      netID: "fz268",
      name: "Fanny Zheng",
      position: "Events Coordinator",
      image: fannyZheng,
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
