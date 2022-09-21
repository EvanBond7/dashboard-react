import React from 'react';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import jannaProfile from '../../assets/profile/maria_profile.png';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
  return (
    <div className='user'>
      <div className='user-title-container'>
        <h1 className='user-title'>Редактировать пользователя</h1>
        <Link to='/newUser'>
          <button className='user-add-button'>Create</button>
        </Link>
      </div>
      <div className='user-container'>
        <div className='user-show'>
          <div className='user-show-top'>
            <img
              src={jannaProfile}
              alt='профиль пользователя'
              className='user-show-img'
            />
            <div className='user-show-top-title'>
              <span className='user-show-username'>Жанна Васильева</span>
              <span className='user-show-user-title'>
                Инженер технической поддержки
              </span>
            </div>
          </div>
          <div className='user-show-bottom'>
            <span className='user-show-title'>Учетная запись</span>
            <div className='user-show-info'>
              <PermIdentity className='user-show-icon' />
              <span className='user-show-info-title'>jannaL95</span>
            </div>
            <div className='user-show-info'>
              <CalendarToday className='user-show-icon' />
              <span className='user-show-info-title'>05.07.1995</span>
            </div>
            <span className='user-show-title'>Контактные данные</span>
            <div className='user-show-info'>
              <PhoneAndroid className='user-show-icon' />
              <span className='user-show-info-title'>+7 123 456 67 89</span>
            </div>
            <div className='user-show-info'>
              <MailOutline className='user-show-icon' />
              <span className='user-show-info-title'>janna@gmail.com</span>
            </div>
            <div className='user-show-info'>
              <LocationSearching className='user-show-icon' />
              <span className='user-show-info-title'>Москва | Россия</span>
            </div>
          </div>
        </div>
        <div className='user-update'>
          <span className='user-update-title'>Редактировать</span>
          <form className='user-update-form'>
            <div className='user-update-left'>
              <div className='user-update-item'>
                <label>юзернейм</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='user-update-input'
                />
              </div>
              <div className='user-update-item'>
                <label>Полное Имя</label>
                <input
                  type='text'
                  placeholder='Жанна Васильева'
                  className='user-update-input'
                />
              </div>
              <div className='user-update-item'>
                <label>Электронная почта</label>
                <input
                  type='text'
                  placeholder='janna@gmail.com'
                  className='user-update-input'
                />
              </div>
              <div className='user-update-item'>
                <label>Телефон</label>
                <input
                  type='text'
                  placeholder='+1 123 456 67'
                  className='user-update-input'
                />
              </div>
              <div className='user-update-item'>
                <label>Адрес</label>
                <input
                  type='text'
                  placeholder='Москва | Россия'
                  className='user-update-input'
                />
              </div>
            </div>
            <div className='user-update-right'>
              <div className='user-update-upload'>
                <img
                  className='user-update-img'
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='user-update-icon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='user-update-button'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
