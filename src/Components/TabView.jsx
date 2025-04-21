import React from 'react';

function TabView({ selectedView, setSelectedView }) { //passing the selected view so that we can conditionally apply css class styling
  return (
    <div className="tab-view-container">
      <div className="tabs">
        <button
          className={`tab ${selectedView === 'collection' ? 'active' : ''}`}//highlighting the active tab
          onClick={() => setSelectedView('collection')}
        >
          Bot Collection
        </button>

        <button
          className={`tab ${selectedView === 'army' ? 'active' : ''}`}
          onClick={() => setSelectedView('army')}
        >
          Your Bot Army
        </button>

        <button
          className={`tab ${selectedView === 'compare' ? 'active' : ''}`}
          onClick={() => setSelectedView('compare')}
        >
          Side-by-Side Comparison
        </button>
      </div>
    </div>
  );
}

export default TabView;
