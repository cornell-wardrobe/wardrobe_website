import React from "react";
import { useState } from "react";
import People from "../components/people";

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
      netID: "jcj59",
      name: "Jack Jansons",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c7306169da912bff8bf16a_JackJansons_Headshot-p-500.jpg",
    },
    {
      netID: "ja688",
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
      netID: "ars387",
      name: "Alyssa Serebrenik",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c730c8347c21785e4a0925_AlyssaSerebrenik_Headshot-p-500.jpg",
    },
    {
      netID: "pc523",
      name: "Patrick Chen",
      position: "Technology Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a84072664c923fdd5ae4ef_Patrick%20Chen-p-500.jpeg",
    },
    {
      netID: "jc2676",
      name: "Jenny Chen",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63178e941e65ba1c27732188_Jenny%20Chen-p-500.jpg",
    },
    {
      netID: "med279",
      name: "Matthew DeSousa",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83fce488e0624d4220a94_Matthew%20DeSousa-p-500.jpeg",
    },
  ];

  const MARKETING = [
    {
      netID: "cs855",
      name: "Chris Song",
      position: "Marketing Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83dae0b73d5e7fbf4cd65_Chris%20Song-p-500.jpeg",
    },
    {
      netID: "jc2887",
      name: "Joanna Chen",
      position: "Graphic Designer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c7309ee38f8f11700970fb_JoannaChen_Headshot-p-500.jpg",
    },
    {
      netID: "asp235",
      name: "Amanda Pinto",
      position: "Graphic Designer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83d00a3d9e64387c19af8_Amanda%20Pinto-p-500.jpeg",
    },
    {
      netID: "ma878",
      name: "Maryam Albakry",
      position: "Graphic Designer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67e6386067558b8a4805d_Maryam_Albakry_Headshot%20Large-p-500.jpeg",
    },
    {
      netID: "yl3577",
      name: "Irene Lee",
      position: "Marketing Associate",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67ee7893f253702078680_Irene_Lee_Headshot%20Large-p-500.jpeg",
    },
    {
      netID: "mfb227",
      name: "Molly Beucler",
      position: "Social Media Associate",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c730a34b4eb951d7261877_MollyBeucler_Headshot-p-500.jpg",
    },
    {
      netID: "so429",
      name: "Serina Oh",
      position: "Social Media Associate",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63178ec2659ecadf756316cf_Serina%20Oh-p-500.jpg",
    },
    {
      netID: "kfh34",
      name: "Kylie Huber",
      position: "Feedback Strategist",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63178ea2bc5cdea3feea648d_Kylie%20Huber%20final-p-500.jpg",
    },
    {
      netID: "sap244",
      name: "Sophia Papanicolaou",
      position: "Media Associate",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63d6d7fc6b5cd1bd718c1d28_SophiaPapanicolaou_headshot-p-500.jpg",
    },
  ];

  const FINANCE = [
    {
      netID: "lci3",
      name: "Louis Izawa",
      position: "Full Stack Software Engineer",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83f9b9aefa941d8beee40_Louis%20Izawa-p-500.jpg",
    },
    {
      netID: "nam96",
      name: "Nevin Motto",
      position: "Financial Analyst",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63178eadb370461d97f46cdd_Nevin%20Motto-p-500.jpg",
    },
    {
      netID: "aqz2",
      name: "Andrew Zhang",
      position: "Financial Analyst",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c730930930fc1fe877b667_AndrewZhang_Headshot-p-500.jpg",
    },
    {
      netID: "cg553",
      name: "Carly Granda",
      position: "Financial Analyst",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63c73099e38f8ff1680970e6_CarlyGranda_Headshot-p-500.jpg",
    },
    {
      netID: "rdl66",
      name: "Rachel Liu",
      position: "Financial Analyst",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67e96c2b5899c8a18cfd9_Rachel_Liu_Headshot%20Large-p-500.jpeg",
    },
    {
      netID: "adr62",
      name: "Arya Ramkumar",
      position: "Financial Analyst",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83d3e0b73d5be3cf4cb49_Arya%20Ramkumar-p-500.jpeg",
    },
    {
      netID: "yh459",
      name: "Yudai Higuchi",
      position: "Financial Analyst",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a840d29bc1082baad36a6d_Yudai%20Higuchi-p-800.jpeg",
    },
  ];

  const EVENTS = [
    {
      netID: "jh2429",
      name: "Jennifer Herrera",
      position: "Events Team Director",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83ed0f5228265d8dda230_Jennifer%20Herrera-p-800.jpeg",
    },
    {
      netID: "vk283",
      name: "Vindhya Kathuria",
      position: "Events Coordinator",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67ead47b99f44053b4e67_Vindhya_Kathuria_Headshot%20Large-p-500.jpeg",
    },
    {
      netID: "ajs573",
      name: "Ashley Sosa",
      position: "Events Coordinator",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/63f67ecd83535f735fa8d123_Ashley_Sosa_Headshot%20Large-p-500.jpeg",
    },
    {
      netID: "jpi7",
      name: "Julia Isko",
      position: "Programming Coordinator",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/641d3b81afa8dabc1ba0319d_JuliaIsko_Headshot-p-500.jpg",
    },
    {
      netID: "jbe49",
      name: "Julia Edelman",
      position: "Programming Coordinator",
      image:
        "https://uploads-ssl.webflow.com/613b882ec820216cd28b3046/61a83f09ff38c67dff444481_Julia%20Edelman-p-800.jpeg",
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
