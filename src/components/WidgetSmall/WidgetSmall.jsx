import React from 'react';
import { Visibility } from '@material-ui/icons';
import mariaProfile from '../../assets/profile/maria_profile.png';

import './widgetSmall.css';

export default function WidgetSmall() {
  return (
    <div className='widget-sm'>
      <span className='widget-sm-title'>Новые сотрудники</span>
      <ul className='widget-sm-list'>
        <li className='widget-sm-list-item'>
          <img
            src={mariaProfile}
            alt='Мария Знатина'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Просмотр
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src={mariaProfile}
            alt='Мария Знатина'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Просмотр
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src={mariaProfile}
            alt='Мария Знатина'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Просмотр
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src={mariaProfile}
            alt='Мария Знатина'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Просмотр
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src={mariaProfile}
            alt='Мария Знатина'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Просмотр
          </button>
        </li>
      </ul>
    </div>
  );
}
