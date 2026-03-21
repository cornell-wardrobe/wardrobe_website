import React from "react";
import { useState } from "react";
import People from "../components/people";

//management
import erikaChin from "../components/headshots/ErikaChin.jpg";
import jessicaCaivano from "../components/headshots/Jessica_Caivano.JPG";
import ethanFrank from "../components/headshots/Ethan_Frank.jpg";

//operations
import synaSony from "../components/headshots/Syna_Sony.JPG";
import kainwang from "../components/headshots/Kain_Wang.JPG";
import elizabethLaraRivera from "../components/headshots/logo2.png";
import sophialin from "../components/headshots/SophiaLin.jpg";
import isabellaLee from "../components/headshots/isabellaLee.jpg";
import ryanross from "../components/headshots/RyanRoss.jpg";
import lexieChen from "../components/headshots/lexieChen.jpg";
import ingachen from "../components/headshots/IngaChen.JPG";

//technology
import zahintasnin from "../components/headshots/Zahin_Tasnin.JPG";
import yalaHuangFeng from "../components/headshots/Yala_Huang _Feng.png";
import teresachen from "../components/headshots/TeresaChen.jpeg";

//marketing
import melKhan from "../components/headshots/Mel_Khan.JPG";
import miaLopez from "../components/headshots/Mia_Lopez.JPG";
import graceCarlson from "../components/headshots/Grace_Carlson.JPG";
import seamusMcDevitt from "../components/headshots/logo2.png";
import sherrychen from "../components/headshots/Sherry_Chen.jpg";
import suriwang from "../components/headshots/SuriWang.JPG";
import rachelEisenhart from "../components/headshots/Rachel_Eisenhart.jpg";

//finance
import alexweibly from "../components/headshots/Alex_Weibly.jpeg";
import diMa from "../components/headshots/diMa.JPG";
import xinqilian from "../components/headshots/XinQiLian.JPG";
import benjaminloong from "../components/headshots/Benjamin_Loong.JPG";

//events
import emilysavedoff from "../components/headshots/EmilySavedoff.jpg";
import memberdagba from "../components/headshots/Member_Dagba.png";
import lavanyaLehl from "../components/headshots/LavanyaLehl.jpg";
import jessicaFrazendeiro from "../components/headshots/Jessica_Fazendeiro.png";
import sophiaJonisch from "../components/headshots/SophiaJonisch.jpg";







function Team() {
  const MANAGEMENT = [
    {
      netID: "ejc245",
      name: "Erika Chin",
      position: "President",
      image: erikaChin,
      blurb: "I am a senior majoring in Statistical Sciences. Outside of Wardrobe, I am a captain of the Varsity Fencing team. I am interested in strategy and operations, specifically for startups.",
      linkedin: "http://linkedin.com/in/erikajchin/"
    },

    {
      netID: "jmc689",
      name: "Jessica Caivano",
      position: "Vice President",
      image: jessicaCaivano,
      blurb: "",
      linkedin: ""
    },

    {
      netID: "esf77",
      name: "Ethan Frank",
      position: "VP External Affairs",
      image: ethanFrank,
      blurb: "",
      linkedin: "",
    },
  ];

  const OPS = [
    {
      netID: "ss4352",
      name: "Syna Sony",
      position: "Operations Director",
      image: synaSony,
      blurb: "",
      linkedin: "",
    },
    {
      netID: "kcw57",
      name: "Kain Wang",
      position: "Operations Director",
      image: kainwang,
      blurb: "Kain is an economics major going for minors in business and health policy. He's interested in optimizing private health insurance in the United States and is consequently studying to be an actuary. Outside of The Wardrobe, Kain frequently illustrates, contributing to campus publications and maintaining a self-run shop.",
      linkedin: "https://www.linkedin.com/in/kain-wang-4b8525349/"
    
    },
    {
      netID: "sophialin",
      name: "Sophia Lin",
      position: "Operations Associate",
      image: sophialin,
      blurb: "Sophia is a freshman studying Applied Economics and Management. She is interested in supporting and creating visible impact on those around her by improving processes so that organizations can function smoothly. Outside Wardrobe, she can be found clerking for the Student Assembly, working at the ReUse MegaCenter, or at ABCC or DOTS.",
      linkedin: "www.linkedin.com/in/sophia-lin-a40421367"
    },
    {
      netID: "elizabethlararivera",
      name: "Elizabeth Lara Rivera",
      position: "Operations Associate",
      image: elizabethLaraRivera,
      blurb:"",
      linkedin: "",
    },
    {
      netID: "ryanross",
      name: "Ryan Ross",
      position: "Operations Associate/Financial Analyst",
      image: ryanross,
      blurb: "Ryan is a freshman in the ILR school, minoring in business. Outside of The Wardrobe, he is a part of Social Enterprise at Cornell and Crossroads at Cornell. He hopes to pursue a career in consulting, with a focus on retail or hospitality.",
      linkedin: "https://www.linkedin.com/in/ryan-ross-b67621218/"
    },
    {
      netID: "ingachen",
      name: "Inga Chen",
      position: "Operations Associate",
      image: ingachen,
      blurb: "Majoring in Communication and Environment & Sustainability. I plan on working in a role that positively impacts sustainability in the future. Currently, I’m in Engineers for a Sustainable world, hall council and hall association, and Cornell Mind Matters.",
      linkedin: "https://www.linkedin.com/in/inga-chen-175131326?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
      netID: "isabella",
      name: "Isabella Lee",
      position: "Operations Associate",
      image: isabellaLee,
      blurb: "Isabella Lee is a first-year student majoring in Applied Economics and Management at the Dyson School. She is interested in pursuing a career in corporate or public accounting. She currently works at Café Jennie, located inside The Cornell Store, where she helps maintain an efficient and welcoming environment. Outside of academics and work, Isabella enjoys discovering new TV shows and movies to watch with friends and reading in her free time.",
      linkedin: "www.linkedin.com/in/ isabella-lee928",
    },
    {
      netID: "lexieChen",
      name: "Lexie Chen",
      position: "Operations Associate",
      image: lexieChen,
      blurb: "Lexie is a freshman studying Applied Economics & Management. Outside of The Wardrobe, she is involved in Medium Design Collective and Cornell Mergers & Acquisitions Club. In her free time, she enjoys going to concerts, painting, and looking for new study spots on campus!",
      linkedin: "https://www.linkedin.com/in/lexie-chen/"
    }
  ];

  const TECH = [
    {
      netID: "zt276",
      name: "Zahin Tasnin",
      position: "Technology Director",
      image: zahintasnin,
      blurb: "Zahin is a sophomore studying computer science in the college of engineering. Outside of The Wardrobe, she is also part of Cornell WebDev and Cornell Blockchain. In her free time, she likes to cook and hang out with her friends.",
      linkedin: "https://www.linkedin.com/in/zahintasnin/"
    },
    {
      netID: "yh2293",
      name: "Yala Huang Feng",
      position: "Frontend Software Engineer",
      image: yalaHuangFeng,
      blurb: "",
      linkedin: ""
    },
    {
      netID: "teresachen",
      name: "Teresa Chen",
      position: "Frontend Software Engineer",
      image: teresachen,
      blurb: "Electrical & Computer Engineering. Looking forward to work in the semiconductor industry! I am also part of C2S2!",
      linkedin: "https://www.linkedin.com/in/teresa-chen0927?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  const MARKETING = [
    {
      netID: "mmk289",
      name: "Mel Khan",
      position: "Marketing Director",
      image: melKhan,
      blurb: "",
      linkedin: ""
    
    },
    {
      netID: "mgl89",
      name: "Mia Lopez",
      position: "Marketing Director",
      image: miaLopez,
      blurb: "",
      linkedin: ""
    
    },
    {
      netID: "gcc77",
      name: "Grace Carlson",
      position: "Marketing Associate",
      image: graceCarlson,
      blurb: "",
      linkedin: "",
    
    },
    {
      netID: "",
      name: "Seamus McDevitt",
      position: "Marketing Associate",
      image: seamusMcDevitt,
      blurb:"",
      linkedin: "",
    },
    {
      netID: "sc3498",
      name: "Sherry Chen",
      position: "Marketing Associate",
      image: sherrychen,
      blurb: "My major is Applied Economics & Management. My career aspirations is marketing and graphic design. My other organizations include Cornell Dining, Cornell Red Cross, Society of Women in Business.",
      linkedin: "http://linkedin.com/in/sherry-chen0772",
    },
    {
      netID: "rse53",
      name: "Rachel Eisenhart",
      position: "Marketing Associate",
      image: rachelEisenhart,
      blurb: "",
      linkedin: "",
    },
    {
      netID: "suriwang",
      name: "Suri Wang",
      position: "Marketing Associate",
      image: suriwang,
      blurb: "My major is Biology and Society on the pre-med track! I hope to become a pediatrician or neurologist. On campus, I am also a part of Thread Magazine, Rho Psi Eta, and EARS.",
      linkedin: "https://www.linkedin.com/in/suri-wang-0682972b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
  ];

  const FINANCE = [
    {
      netID: "asw259",
      name: "Alex Weibly",
      position: "Financial Director",
      image: alexweibly,
      blurb: "",
      linkedin: "",
    
    },
    {
      netID: "bjl99",
      name: "Benjamin Loong",
      position: "Financial Analyst",
      image: benjaminloong,
      blurb: "",
      linkedin: "",
    
    },
    {
      netID: "",
      name: "Xin Qi Lian",
      position: "Financial Analyst",
      image: xinqilian,
      blurb: "Xin Qi Lian is a first-year student studying at the Cornell University Dyson School of Applied Economics and Management. She's interested in exploring the real-world applications of business strategy and finance. Outside of the Wardrobe, she is apart of Art and Business Club at Cornell, Society for Women in Business, Diversity on the Street, Scholars of Finance, and Dyson Council of Impact and Community Engagement.",
      linkedin: "linkedin.com/in/xinqilian"
    },
    {
      netID: "dima",
      name: "Di Ma",
      position: "Financial Analyst",
      image: diMa,
      blurb: "Di is a first-year Economics major in the College of Arts & Sciences with an interest in finance. Outside of The Wardrobe, she is apart of Cornell Alpha Fund, Society for Women in Business, LOKO Dance Team, and Impact Dance Troupe.",
      linkedin: "linkedin.com/in/didima/",
    },
    {
      netID: "ryanross",
      name: "Ryan Ross",
      position: "Financial Analyst/Operations Associate",
      image: ryanross,
      blurb: "Ryan is a freshman in the ILR school, minoring in business. Outside of The Wardrobe, he is a part of Social Enterprise at Cornell and Crossroads at Cornell. He hopes to pursue a career in consulting, with a focus on retail or hospitality.",
      linkedin: "https://www.linkedin.com/in/ryan-ross-b67621218/"
    },
  ];
  const EVENTS = [
    {
      netID: "ehs98",
      name: "Emily Savedoff",
      position: "Events Director",
      image: emilysavedoff,
      blurb: "",
      linkedin: ""
    },
    {
      netID: "mnd48",
      name: "Naomi Dagba",
      position: "Events Coordinator",
      image: memberdagba,
      blurb: "Biological Engineering and minor with environmental sustainability.",
      linkedin: "https://www.linkedin.com/in/naomidagba?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      netID: "",
      name: "Lavanya Lehl",
      position: "Events Coordinator",
      image: lavanyaLehl,
      blurb:"",
      linkedin: "",
    },
    {
      netID:"",
      name: "Jessica Fazendeiro",
      position: "Events Coordinator",
      image: jessicaFrazendeiro,
      blurb: "I am a sophomore studying Hotel Administration. Outside of The Wardrobe, I am involved in Startup Consulting and PDOW. I am interested in pursuing a career in consulting.",
      linkedin: "www.linkedin.com/in/jessica-fazendeiro",
    },
    {
      netID:"",
      name: "Sophia Jonisch", 
      position: "Events Coordinator",
      image: sophiaJonisch,
      blurb:"",
      linkedin: "",
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
