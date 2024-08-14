import React from 'react';

function Sidebar() {
  return (
    // Sidebar (hidden by default)
    <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={ {display: 'none', zIndex: 2, width: '40%',minWidth: '300px' } } id="mySidebar">
      {/* 밑에 3줄 onclick="w3_close()" 잠시 없앰 */}
      {/* 바로 밑줄 href="javascript:void(0)" 잠시 없앰 */}
      <a href="#"  className="w3-bar-item w3-button">Close Menu</a>
      <a href="#food" className="w3-bar-item w3-button">Food</a>
      <a href="#about" className="w3-bar-item w3-button">About</a>
    </nav>
  );
}

export default Sidebar;