import React from "react";
import { useState } from "react";
import People from "../components/people";
import juliaEdelman from "../components/headshots/Julia_Edelman.jpg";
import alexChen from "../components/headshots/Alex_Chen.png";
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
import sophiaPapanicolaou from "../components/headshots/Sophia_Papanicolaou.png";
import melanieKhan from "../components/headshots/Melanie_Khan.png";
import snehaSinghi from "../components/headshots/Sneha_Singhi.png";
import ashleySosa from "../components/headshots/Ashley_Sosa.jpeg";
import emilyChen from "../components/headshots/Emily_Chen.png";
import taliaPerkins from "../components/headshots/Talia_Perkins.jpg";
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
import natalieKaplan from "../components/headshots/Natalie_Kaplan.jpg"
import nicoleParafati from "../components/headshots/Nicole_Parafati.jpg"
import nicoleYan from "../components/headshots/Nicole_Yan.jpg"
import oliviaKalu from "../components/headshots/Olivia_Kalu.jpg"
import sinnyYe from "../components/headshots/Sinny_Ye.jpg"
import stellaMuthoni from "../components/headshots/Stella_Muthoni.jpg"
import stephanieDong from "../components/headshots/Stephanie_Dong.jpg"
import juliaKundu from "../components/headshots/Julia_Kundu.jpg"
import timmyXi from "../components/headshots/Timmy_Xi.jpg"
import manrajSingh from "../components/headshots/Manraj_Singh.jpg"
import advikaPrasad from "../components/headshots/Advika_Prasad.JPG"

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
    {
      netID: "ny228",
      name: "Nicole Yan",
      position: "Operations Associate",
      image: nicoleYan,
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
      netID: "kfh34",
      name: "Kylie Huber",
      position: "Marketing Associate",
      image: kylieHuber,
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
    {
      netID: "tjx2",
      name: "Timmy Xi",
      position: "Photographer",
      image: timmyXi,
    },
  ];

  const FINANCE = [
    {
      netID: "ss3298",
      name: "Sneha Singhi",
      position: "Finance Director",
      image: snehaSinghi,
    },
    {
      netID: "sy544",
      name: "Sinny Ye",
      position: "Financial Analyst",
      image: sinnyYe,
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
      netID: "ms3263",
      name: "Manraj Singh",
      position: "Financial Analyst",
      image: manrajSingh,
    },
    {
      netID: "ap2373",
      name: "Advika Prasad",
      position: "Financial Analyst",
      image: advikaPrasad,
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
      netID: "nmp68",
      name: "Nicole Parafati",
      position: "Events Coordinator",
      image: nicoleParafati,
    },
    {
      netID: "ok55",
      name: "Olivia Kalu",
      position: "Events Coordinator",
      image: oliviaKalu,
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
      netID: "jky27",
      name: "Kathereen Yang",
      position: "Expansion Finance",
      image: kathereenYang,
    },
    {
      netID: "fz268",
      name: "Fanny Zheng",
      position: "Expansion Events",
      image: fannyZheng,
    },
    {
      netID: "jk2578",
      name: "Julia Kundu",
      position: "Expansion Tech",
      image: juliaKundu,
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
