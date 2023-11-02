import React from "react";
import { useState } from "react";
import People from "../components/people";
import markGambeski from "../components/headshots/Mark_Gambeski.jpeg";
import juliaIsko from "../components/headshots/Julia_Isko.png";
import juliaEdelman from "../components/headshots/Julia_Edelman.JPG";
import adamSenzon from "../components/headshots/Adam_Senzon.png";
import alexChen from "../components/headshots/Alex_Chen.png";
import sarahKim from "../components/headshots/Sarah_Kim.png";
import elainePark from "../components/headshots/Elaine_Park.jpeg";
import winnieLin from "../components/headshots/Winnie_Lin.png";
import sorayahSmith from "../components/headshots/Sorayah_Smith.png";
import laurenSong from "../components/headshots/Lauren_Song.png";
import claraKennedy from "../components/headshots/Clara_Kennedy.png";
import patrickChen from "../components/headshots/Patrick_Chen.png";
import jennyChen from "../components/headshots/Jenny_Chen.png";
import richardKang from "../components/headshots/Richard_Kang.png";
import javohirAbdurazzakov from "../components/headshots/Javohir_Abdurazzakov.png";
import aidanOConnor from "../components/headshots/Aidan_O'Connor.png";
import maryamAlbakry from "../components/headshots/Maryam_Albakry.png";
import connorChen from "../components/headshots/Connor_Chen.png";
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
import isabellaZhang from "../components/headshots/Isabella_Zhang.png";
import vindhyaKathuria from "../components/headshots/Vindhya_Kathuria.png";
import ashleySosa from "../components/headshots/Ashley_Sosa.jpeg";
import emilyChen from "../components/headshots/Emily_Chen.png";

function Team() {
  const MANAGEMENT = [
    {
      netID: "mfg57",
      name: "Mark Gambeski",
      position: "President",
      image: markGambeski,
    },
    {
      netID: "jpi7",
      name: "Julia Isko",
      position: "VP of Outreach",
      image: juliaIsko,
    },
    {
      netID: "jbe49",
      name: "Julia Edelman",
      position: "VP of Strategy and Development",
      image: juliaEdelman,
    },
    {
      netID: "ars424",
      name: "Adam Senzon",
      position: "VP of Internal Relations",
      image: adamSenzon,
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
      netID: "sjk246",
      name: "Sarah Kim",
      position: "Operations Associate",
      image: sarahKim,
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
      netID: "ma878",
      name: "Maryam Albakry",
      position: "Frontend Software Engineer",
      image: maryamAlbakry,
    },
    {
      netID: "cjc353",
      name: "Connor Chen",
      position: "Frontend Software Engineer",
      image: connorChen,
    },
    {
      netID: "axz5",
      name: "Allison Zheng",
      position: "Frontend Software Engineer",
      image: allisonZheng,
    },
  ];

  const MARKETING = [
    {
      netID: "kfh34",
      name: "Kylie Huber",
      position: "Marketing Director",
      image: kylieHuber,
    },
    {
      netID: "yl3577",
      name: "Irene Lee",
      position: "Marketing Associate",
      image: ireneLee,
    },
    {
      netID: "sap244",
      name: "Sophia Papanicolaou",
      position: "Marketing Associate",
      image: sophiaPapanicolaou,
    },
    {
      netID: "mmk289",
      name: "Melanie Kahn",
      position: "Marketing Associate",
      image: melanieKhan,
    },
    {
      netID: "lh693",
      name: "Luke Huang",
      position: "Marketing Associate",
      image: lukeHuang,
    },
  ];

  const FINANCE = [
    {
      netID: "nam96",
      name: "Nevin Motto",
      position: "Financial Director",
      image: nevinMotto,
    },
    {
      netID: "cg553",
      name: "Carly Granda",
      position: "Financial Analyst",
      image: carlyGranda,
    },
    {
      netID: "adr62",
      name: "Arya Ramkumar",
      position: "Financial Analyst",
      image: aryaRamkumar,
    },
    {
      netID: "yh459",
      name: "Yudai Higuchi",
      position: "Financial Analyst",
      image: yudaiHiguchi,
    },
    {
      netID: "tch84",
      name: "Tyler Herridan",
      position: "Financial Analyst",
      image: tylerHerridan,
    },
    {
      netID: "ss3298",
      name: "Sneha Singhi",
      position: "Financial Analyst",
      image: snehaSinghi,
    },
  ];

  const EVENTS = [
    {
      netID: "iz46",
      name: "Isabella Zhang",
      position: "Events Director",
      image: isabellaZhang,
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
              activeTab === 0 ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !mr-4" : "tab font-bold px-2 pt-2 !mr-4"
            }
            onClick={() => handleTabClick(0)}
          >
            Management
          </button>
          <button
            className={
              activeTab === 1 ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4" : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(1)}
          >
            Operations
          </button>
          <button
            className={
              activeTab === 2 ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4" : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(2)}
          >
            Technology
          </button>
          <button
            className={
              activeTab === 3 ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4" : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(3)}
          >
            Marketing
          </button>
          <button
            className={
              activeTab === 4 ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0 !mr-4" : "tab font-bold px-2 pt-2 !ml-0 !mr-4"
            }
            onClick={() => handleTabClick(4)}
          >
            Finance
          </button>
          <button
            className={
              activeTab === 5 ? "tab active border-b-2 border-blue-500 font-bold px-2 pt-2 !ml-0" : "tab font-bold px-2 pt-2 !ml-0"
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
