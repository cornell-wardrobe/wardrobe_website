import React from "react";
import { useState } from "react";
import People from "../components/people";
import juliaEdelman from "../components/headshots/Julia_Edelman.jpg";
import alexChen from "../components/headshots/Alex_Chen.png";
import elainePark from "../components/headshots/Elaine_Park.jpeg";
import winnieLin from "../components/headshots/Winnie_Lin.png";
import sorayahSmith from "../components/headshots/Sorayah_Smith.png";
import laurenSong from "../components/headshots/Lauren_Song.png";
import claraKennedy from "../components/headshots/Clara_Kennedy.png";
import patrickChen from "../components/headshots/Patrick_Chen.png";
import jennyChen from "../components/headshots/Jenny_Chen.png";
import richardKang from "../components/headshots/Richard_Kang.png";
import javohirAbdurazzakov from "../components/headshots/Javohir_Abdurazzakov.jpg"; 
import aidanOConnor from "../components/headshots/Aidan_O'Connor.png";
import maryamAlbakry from "../components/headshots/Maryam_Albakry.png";
import allisonZheng from "../components/headshots/Allison_Zheng.png";
import kylieHuber from "../components/headshots/Kylie_Huber.png";
import ireneLee from "../components/headshots/Irene_Lee.png";
import sophiaPapanicolaou from "../components/headshots/Sophia_Papanicolaou.png";
import melanieKhan from "../components/headshots/Melanie_Khan.png";
import lukeHuang from "../components/headshots/Luke_Huang.png";
import nevinMotto from "../components/headshots/Nevin_Motto.png";
import carlyGranda from "../components/headshots/Carly_Granda.png";
import aryaRamkumar from "../components/headshots/Arya_Ramkumar.jpeg";
import yudaiHiguchi from "../components/headshots/Yudai_Higuchi.jpg";
import tylerHerridan from "../components/headshots/Tyler_Herridan.png";
import snehaSinghi from "../components/headshots/Sneha_Singhi.png";
import vindhyaKathuria from "../components/headshots/Vindhya_Kathuria.png";
import ashleySosa from "../components/headshots/Ashley_Sosa.jpeg";
import emilyChen from "../components/headshots/Emily_Chen.png";
import taliaPerkins from "../components/headshots/Talia-Perkins.jpeg";
import nicoletteGani from "../components/headshots/Nicolette_Gani.jpg";
import annemarieEhrenreich from "../components/headshots/AnneMarie_Ehrenreich.jpg" 
import bernadetteBatuncang from "../components/headshots/Bernadette_Batuncang.jpg"
import carrieZheng from "../components/headshots/Carrie_Zheng.jpg" 
import atkinsDube from "../components/headshots/Atkins_Dube.jpg" 
import fannyZheng from "../components/headshots/Fanny_Zheng.jpg" 
import helenLin from "../components/headshots/Helen_Lin.jpg" 
import kathereenYang from "../components/headshots/Kathereen_Yang.jpg" 
import kellyZeng from "../components/headshots/Kelly_Zeng.jpg" 
import leonorRobalino from "../components/headshots/Leonor_Robalino.jpg" 

function Team() {
  const MANAGEMENT = [
    {
      netID: "jbe49",
      name: "Julia Edelman",
      position: "Co-President",
      image: juliaEdelman,
    },
    {
      netID: "sap244",
      name: "Sophia Papanicolaou",
      position: "Co-President",
      image: sophiaPapanicolaou,
    },
    {
      netID: "ma878",
      name: "Maryam Albakry",
      position: "Vice President",
      image: maryamAlbakry,
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
      netID: "ecp83",
      name: "Elaine Park",
      position: "Operations Associate",
      image: elainePark,
    },
    {
      netID: "wl526",
      name: "Winnie Lin",
      position: "Operations Associate",
      image: winnieLin,
    },
    {
      netID: "sbs324",
      name: "Sorayah Smith",
      position: "Operations Associate",
      image: sorayahSmith,
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
  ];

  const TECH = [
    {
      netID: "pc523",
      name: "Patrick Chen",
      position: "Technology Director",
      image: patrickChen,
    },
    {
      netID: "jc2676",
      name: "Jenny Chen",
      position: "Product Lead & UI/UX Engineer",
      image: jennyChen,
    },
    {
      netID: "rk695",
      name: "Richard Kang",
      position: "Frontend Software Engineer",
      image: richardKang,
    },
    {
      netID: "ja688",
      name: "Javohir Abdurazzakov",
      position: "Frontend Software Engineer",
      image: javohirAbdurazzakov,
    },
    {
      netID: "ao274",
      name: "Aidan O'Connor",
      position: "Frontend Software Engineer",
      image: aidanOConnor,
    },
    {
      netID: "axz5",
      name: "Allison Zheng",
      position: "Frontend Software Engineer",
      image: allisonZheng,
    },
    {
      netID: "akd74",
      name: "Atkins Dube",
      position: "Full Stack Software Engineer",
      image: atkinsDube,
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
      netID: "kfh34",
      name: "Kylie Huber",
      position: "Marketing Associate",
      image: kylieHuber,
    },
    {
      netID: "yl3577",
      name: "Irene Lee",
      position: "Marketing Associate",
      image: ireneLee,
    },
    {
      netID: "lh693",
      name: "Luke Huang",
      position: "Marketing Associate",
      image: lukeHuang,
    },
    {
      netID: "aae43",
      name: "Anne Marie Ehrenreich",
      position: "Marketing Associate",
      image: annemarieEhrenreich,
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
  ];

  const FINANCE = [
    {
      netID: "nam96",
      name: "Nevin Motto",
      position: "Finance Director",
      image: nevinMotto,
    },
    {
      netID: "cg553",
      name: "Carly Granda",
      position: "Finance Analyst",
      image: carlyGranda,
    },
    {
      netID: "adr62",
      name: "Arya Ramkumar",
      position: "Finance Analyst",
      image: aryaRamkumar,
    },
    {
      netID: "yh459",
      name: "Yudai Higuchi",
      position: "Finance Analyst",
      image: yudaiHiguchi,
    },
    {
      netID: "tch84",
      name: "Tyler Herridan",
      position: "Finance Analyst",
      image: tylerHerridan,
    },
    {
      netID: "ss3298",
      name: "Sneha Singhi",
      position: "Finance Analyst",
      image: snehaSinghi,
    },
  ];

  const EVENTS = [
    {
      netID: "twp46",
      name: "Talia Perkins",
      position: "Events Director",
      image: taliaPerkins,
    },
    {
      netID: "vk283",
      name: "Vindhya Kathuria",
      position: "Events Coordinator",
      image: vindhyaKathuria,
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
  ];

  const EXPANSION = [
    {
      netID: "nig22",
      name: "Nicolette Gani",
      position: "Director of Expansion",
      image: nicoletteGani,
    },
    {
      netID: "cz376",
      name: "Carrie Zheng",
      position: "Expansion Finance",
      image: carrieZheng,
    },
    {
      netID: "fz268",
      name: "Fanny Zheng",
      position: "Expansion Events",
      image: fannyZheng,
    },
    {
      netID: "jky27",
      name: "Kathereen Yang",
      position: "Expansion",
      image: kathereenYang,
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
