import React from 'react';
import './topbar.css';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbar-wrapper'>
        <div className='top-left'>
          <span className='logo'>dashboardLogo</span>
        </div>
        <div className='top-right'>right</div>
      </div>
    </div>
  );
}
