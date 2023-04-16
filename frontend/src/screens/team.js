import React from "react";
import { useState } from "react";
import People from "../components/people";
import { Link } from "react-router-dom";

function Team() {
  const MANAGEMENT = [
    {
      netID: "sjk246",
      name: "Sarah Kim",
      position: "President",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a840adcce16a659393deb6_Sarah%20Kim-p-500.jpg",
    },
    {
      netID: "iz46",
      name: "Isabella Zhang",
      position: "Vice President",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c73075a067857976ecd946_IsabellaZhang_Headshot-p-500.jpg",
    },
    {
      netID: "mfg57",
      name: "Mark Gambeski",
      position: "Vice President & Chief Technology Officer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67efc0091ab955d7baebc_Mark_Gambeski_Headshot-p-500.jpeg",
    },
  ];

  const OPS = [
    {
      netID: "ecp83",
      name: "Elaine Park",
      position: "Co-Operations Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67ef35152707a98fc5e5e_Elaine_Park_Headshot%20Large-p-500.jpeg",
    },
    {
      netID: "akc58",
      name: "Alex Chen",
      position: "Co-Operations Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c730c3cf7c29e4db11fca1_AlexChen_Headshot-p-500.jpg",
    },
    {
      netID: "ecp83",
      name: "Syon Lee",
      position: "Co-Operations Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63d6d7f4dcbbdf22e251c09f_SyonLee_Headshot-p-500.jpg",
    },
    {
      netID: "ecp83",
      name: "Winnie Lin",
      position: "Co-Operations Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67e7ca5683932b695435f_Winnie_Lin_Headshot%20Large-p-500.jpeg",
    },
    {
      netID: "ecp83",
      name: "Adam Senzon",
      position: "Co-Operations Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/64014ff5eb56cc20423efac4_Adam_Senzon_Headshot%20Large-p-500.jpeg",
    },
  ];

  const TECH = [
    {
      netID: "jkc97",
      name: "Jason Chung",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83e997e6d98a20882e70e_Jason%20Chung-p-800.jpeg",
    },
    {
      netID: "ao274",
      name: "Richard Kang",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63178eb66fb5950326b75333_Richard%20Kang-p-500.jpg",
    },
    {
      netID: "ao274",
      name: "Jack Jansons",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c7306169da912bff8bf16a_JackJansons_Headshot-p-500.jpg",
    },
    {
      netID: "ao274",
      name: "Javohir Abdurazzakov",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c7306ce019b3cd7bd00e33_JavohirAbdurazzakov_Headshot-p-500.jpg",
    },
    {
      netID: "ao274",
      name: "Aidan O'Connor",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c73071749216d525bb676c_AidanO_ConnorHeadshot-p-500.jpg",
    },
    {
      netID: "ao274",
      name: "Alyssa Serebrenik",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c730c8347c21785e4a0925_AlyssaSerebrenik_Headshot-p-500.jpg",
    },
    {
      netID: "ao274",
      name: "Patrick Chen",
      position: "Technology Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a84072664c923fdd5ae4ef_Patrick%20Chen-p-500.jpeg",
    },
    {
      netID: "ao274",
      name: "Jenny Chen",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63178e941e65ba1c27732188_Jenny%20Chen-p-500.jpg",
    },
    {
      netID: "ao274",
      name: "Matthew DeSousa",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83fce488e0624d4220a94_Matthew%20DeSousa-p-500.jpeg",
    },
  ];

  const MARKETING = [
    {
      netID: "ao274",
      name: "Aidan O'Connor",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c73071749216d525bb676c_AidanO_ConnorHeadshot-p-500.jpg",
    },
  ];

  const FINANCE = [
    {
      netID: "ao274",
      name: "Aidan O'Connor",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c73071749216d525bb676c_AidanO_ConnorHeadshot-p-500.jpg",
    },
  ];

  const EVENTS = [
    {
      netID: "ao274",
      name: "Aidan O'Connor",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c73071749216d525bb676c_AidanO_ConnorHeadshot-p-500.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full ml-[17%]">
        <p className="text-3xl font-bold ">Meet The Team</p>
        <p className="text-1xl ">The faces behind the Wardrobe</p>
      </div>
      <div className="w-full">
        <div className="tabs flex ml-[17%] space-x-4 ">
          <button
            className={
              activeTab === 0 ? "tab active border-b-2 border-blue-500" : "tab"
            }
            onClick={() => handleTabClick(0)}
          >
            Management
          </button>
          <button
            className={
              activeTab === 1 ? "tab active border-b-2 border-blue-500" : "tab"
            }
            onClick={() => handleTabClick(1)}
          >
            Operations
          </button>
          <button
            className={
              activeTab === 2 ? "tab active border-b-2 border-blue-500" : "tab"
            }
            onClick={() => handleTabClick(2)}
          >
            Technology
          </button>
          <button
            className={
              activeTab === 3 ? "tab active border-b-2 border-blue-500" : "tab"
            }
            onClick={() => handleTabClick(3)}
          >
            Marketing
          </button>
          <button
            className={
              activeTab === 4 ? "tab active border-b-2 border-blue-500" : "tab"
            }
            onClick={() => handleTabClick(4)}
          >
            Finance
          </button>
          <button
            className={
              activeTab === 5 ? "tab active border-b-2 border-blue-500" : "tab"
            }
            onClick={() => handleTabClick(5)}
          >
            Events
          </button>
        </div>
        <div className="tab-content ">
          {activeTab === 0 && (
            <div>
              <People items={MANAGEMENT} />
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <People items={OPS} />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <People items={TECH} />
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <People items={MARKETING} />
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <People items={FINANCE} />
            </div>
          )}
          {activeTab === 5 && (
            <div>
              <People items={EVENTS} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
