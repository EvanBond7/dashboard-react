import React from 'react';
import './topbar.css';
import { NotificationsNone } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbar-wrapper'>
        <div className='top-left'>
          <span className='logo'>dashboardLogo</span>
        </div>
        <div className='top-right'>
          <div className='topbar-icons'>
            <NotificationsNone />
          </div>
        </div>
      </div>
    </div>
  );
}
