import React from 'react';
import './new-product.css';

export default function NewProduct() {
  return (
    <div className='new-product'>
      <h1 className='add-product-title'>Новый товар</h1>
      <form className='add-product-form'>
        <div className='add-product-item'>
          <label>Изображение</label>
          <input type='file' id='file' />
        </div>
        <div className='add-product-item'>
          <label>Название</label>
          <input type='text' placeholder='Sony PlayStation 5' />
        </div>
        <div className='add-product-item'>
          <label>На складе</label>
          <input type='text' placeholder='12345' />
        </div>
        <div className='add-product-item'>
          <label>Быстрая доставка</label>
          <select name='active' id='active'>
            <option value='yes'>Да</option>
            <option value='no'>Нет</option>
          </select>
        </div>
        <button className='add-product-button'>Создать</button>
      </form>
    </div>
  );
}
