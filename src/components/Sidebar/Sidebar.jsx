import React from 'react';
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        <div className='sidebar-menu'>
          <h3 className='siderbar-title'>Информационная панель</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item active'>
              <LineStyle className='sidebar-icon' />
              Главная
            </li>
            <li className='sidebar-list-item'>
              <Timeline className='sidebar-icon' />
              Аналитика
            </li>
            <li className='sidebar-list-item'>
              <TrendingUp className='sidebar-icon' />
              Продажи
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='siderbar-title'>Быстрый доступ</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item active'>
              <PermIdentity className='sidebar-icon' />
              Пользователи
            </li>
            <li className='sidebar-list-item'>
              <Storefront className='sidebar-icon' />
              Продукты
            </li>
            <li className='sidebar-list-item'>
              <AttachMoney className='sidebar-icon' />
              Транзакции
            </li>
            <li className='sidebar-list-item'>
              <BarChart className='sidebar-icon' />
              Отчеты
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='siderbar-title'>Уведомления</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item active'>
              <MailOutline className='sidebar-icon' />
              Почта
            </li>
            <li className='sidebar-list-item'>
              <DynamicFeed className='sidebar-icon' />
              Отзывы
            </li>
            <li className='sidebar-list-item'>
              <ChatBubbleOutline className='sidebar-icon' />
              Сообщения
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='siderbar-title'>Сотрудники</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item active'>
              <WorkOutline className='sidebar-icon' />
              Управление
            </li>
            <li className='sidebar-list-item'>
              <Timeline className='sidebar-icon' />
              Аналитика
            </li>
            <li className='sidebar-list-item'>
              <Report className='sidebar-icon' />
              Отчеты
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
