import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbar-wrapper'>
        <div className='top-left'>
          <span className='logo'>dashboardLogo</span>
        </div>
        <div className='top-right'>
          <div className='topbar-icons-container'>
            <NotificationsNone />
            <span className='top-icon-badge'>2</span>
          </div>
          <div className='topbar-icons-container'>
            <Language />
            <span className='top-icon-badge'>2</span>
          </div>
          <div className='topbar-icons-container'>
            <Settings />
            <span className='top-icon-badge'>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
