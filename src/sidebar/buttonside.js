import React, { useState, useEffect, useRef } from 'react';
import './sidebar.css';

function ButtonSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Toggle button/icon for mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`Sidebar ${showSidebar ? 'show' : ''}`}>
        <div style={{ marginTop: '15px' }}>
          {showSidebar && <p>Hide Sidebar</p>}
          <p>Welcome </p>
          <p>Welcome </p>
          <p>Welcome </p>
          <p>Welcome </p>
          <p>Welcome </p>
          <p>Welcome </p>
          <p>Welcome </p>
          <p>Welcome </p>
        </div>
      </div>
    </>
  );
}

export default ButtonSidebar;
