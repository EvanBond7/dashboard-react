import React from 'react';
import { Visibility } from '@material-ui/icons';
import './widgetSmall.css';

export default function WidgetSmall() {
  return (
    <div className='widget-sm'>
      <span className='widget-sm-title'>Новые сотрудники</span>
      <ul className='widget-sm-list'>
        <li className='widget-sm-list-item'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Мария Знатина</span>
            <span className='widget-sm-user-title'>Инженер-программист</span>
          </div>
          <button className='widget-sm-button'>
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
