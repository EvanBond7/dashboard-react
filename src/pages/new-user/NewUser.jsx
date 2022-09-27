import React from 'react';
import './new-user.css';

export default function NewUser() {
  return (
    <div className='new-user'>
      <h1 className='new-user-title'>Новый пользователь</h1>
      <form className='new-user-form'>
        <div className='new-user-item'>
          <label>Имя пользователя</label>
          <input type='text' placeholder='anna_92' />
        </div>
        <div className='new-user-item'>
          <label>Полное имя</label>
          <input type='text' placeholder='Анна Линева' />
        </div>
        <div className='new-user-item'>
          <label>Почта</label>
          <input type='email' placeholder='ann_92@yandex.ru' />
        </div>
        <div className='new-user-item'>
          <label>Пароль</label>
          <input type='password' placeholder='введите ваш пароль' />
        </div>
        <div className='new-user-item'>
          <label>Телефон</label>
          <input type='text' placeholder='+7 123 456 78 99' />
        </div>
        <div className='new-user-item'>
          <label>Адрес</label>
          <input type='text' placeholder='Самара' />
        </div>
        <div className='new-user-item'>
          <label>Пол</label>
          <div className='new-user-gender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Муж.</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Жен.</label>
          </div>
        </div>
        <div className='new-user-item'>
          <label>Активный</label>
          <select className='new-user-select' name='active' id='active'>
            <option value='yes'>Да</option>
            <option value='no'>Нет</option>
          </select>
        </div>
        <button className='new-user-button'>Создать</button>
      </form>
    </div>
  );
}
