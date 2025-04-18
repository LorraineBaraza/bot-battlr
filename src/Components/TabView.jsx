import React, { useState } from 'react';

function TabView({ botCollection, yourBotArmy, sideBySideView }) {
  const [activeTab, setActiveTab] = useState('botCollection');  // Track which tab is active

  // Handle changing active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tab-view-container">
      <div className="tabs">
        {/* Tabs as buttons */}
        <button
          className={`tab ${activeTab === 'botCollection' ? 'active' : ''}`}
          onClick={() => handleTabClick('botCollection')}
        >
          Bot Collection
        </button>

        <button
          className={`tab ${activeTab === 'yourBotArmy' ? 'active' : ''}`}
          onClick={() => handleTabClick('yourBotArmy')}
        >
          Your Bot Army
        </button>

        <button
          className={`tab ${activeTab === 'sideBySide' ? 'active' : ''}`}
          onClick={() => handleTabClick('sideBySide')}
        >
          Side-by-Side Comparison
        </button>

      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'botCollection' && (
          <div className="bot-collection">
            {botCollection}
          </div>
        )}
        {activeTab === 'yourBotArmy' && (
          <div className="your-bot-army">
            {yourBotArmy}
          </div>
        )}
        {activeTab === 'sideBySide' && (
          <div className="side-by-side-view">
            {sideBySideView}
          </div>
        )}
      </div>
    </div>
  );
}

export default TabView;
