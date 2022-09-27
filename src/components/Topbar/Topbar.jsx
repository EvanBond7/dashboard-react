import React from 'react';
import logoImg from '../../assets/logos/dashboard.png';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbar-wrapper'>
        <div className='top-left'>
          <span className='logo'>
            <img src={logoImg} alt='лого компании' width={65}></img>
          </span>
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
          <img
            src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Tanned'
            className='top-avatar'
            alt='avatar'
          />
        </div>
      </div>
    </div>
  );
}
