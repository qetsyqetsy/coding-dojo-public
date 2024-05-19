// Tabs.jsx
import React, { useState, useEffect } from 'react';
import './Tabs.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const tabContent = document.querySelector('.tab-content');
    if (tabContent) {
      tabContent.classList.remove('hidden');
    }
  }, [activeTab]);

  const handleTabClick = (index, onClick) => {
    const tabContent = document.querySelector('.tab-content');
    if (tabContent) {
      tabContent.classList.add('hidden');
      setTimeout(() => {
        setActiveTab(index);
      }, 300);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index, tab.onClick)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={`tab-content ${activeTab !== undefined ? '' : 'hidden'}`}>
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
