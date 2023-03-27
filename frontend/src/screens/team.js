import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Team() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div>
        <p className="text-3xl font-bold">Meet the team</p>
        <p className="text-1xl ">The faces behind the Wardrobe</p>
      </div>
      <div>
        <div className="tabs">
          <button
            className={activeTab === 0 ? "tab active" : "tab"}
            onClick={() => handleTabClick(0)}
          >
            Management
          </button>
          <button
            className={activeTab === 1 ? "tab active" : "tab"}
            onClick={() => handleTabClick(1)}
          >
            Operations
          </button>
          <button
            className={activeTab === 2 ? "tab active" : "tab"}
            onClick={() => handleTabClick(2)}
          >
            Technology
          </button>
          <button
            className={activeTab === 3 ? "tab active" : "tab"}
            onClick={() => handleTabClick(3)}
          >
            Marketing
          </button>
          <button
            className={activeTab === 4 ? "tab active" : "tab"}
            onClick={() => handleTabClick(4)}
          >
            Finance
          </button>
          <button
            className={activeTab === 5 ? "tab active" : "tab"}
            onClick={() => handleTabClick(5)}
          >
            Events
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 0 && <div>Content for Tab 1</div>}
          {activeTab === 1 && <div>Content for Tab 2</div>}
          {activeTab === 2 && <div>Content for Tab 3</div>}
          {activeTab === 3 && <div>Content for Tab 4</div>}
          {activeTab === 4 && <div>Content for Tab 5</div>}
          {activeTab === 5 && <div>Content for Tab 6</div>}
        </div>
      </div>
    </div>
  );
}

export default Team;
