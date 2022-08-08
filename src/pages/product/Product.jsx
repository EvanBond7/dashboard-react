import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/Chart/Chart';
import { productData } from '../../db';

export default function Product() {
  return (
    <div className='product'>
      <div className='product-title-container'>
        <h1 className='product-title'>Sony PlayStation 5</h1>
        <Link to='/newproduct'>
          <button className='product-add-button'>Создать</button>
        </Link>
      </div>
      <div className='product-top'>
        <div className='product-top-left'>
          <Chart
            data={productData}
            dataKey='продажи'
            title='Продажи за первый квартал'
            colorLine='#2ec267'
          />
        </div>
        <div className='product-top-right'>
          <div className='product-info-top'>
            <img
              src='https://c.dns-shop.ru/thumb/st4/fit/500/500/09c50606653675238ed02812aa657c11/59de6320f493725826694a79866ccdeca2269749aac4e5920bdce32770aba98e.jpg.webp'
              alt=''
              className='product-info-img'
            />
          </div>
          <div className='product-info-bottom'>
            <div className='product-info-item'>
              <span className='product-info-key'>id:</span>
              <span className='product-info-value'>555</span>
            </div>
            <div className='product-info-item'>
              <span className='product-info-key'>продажи:</span>
              <span className='product-info-value'>12000</span>
            </div>
            <div className='product-info-item'>
              <span className='product-info-key'>на складе:</span>
              <span className='product-info-value'>нет</span>
            </div>
          </div>
        </div>
      </div>
      <div className='product-bottom'>
        <form className='product-form'>
          <div className='product-form-left'>
            <label>Наименование</label>
            <input type='text' placeholder='Sony PlayStation 5' />
            <label>Наличие</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Да</option>
              <option value='no'>Нет</option>
            </select>
            <label>Быстрая доставка</label>
            <select name='active' id='active'>
              <option value='no'>Нет</option>
              <option value='yes'>Да</option>
            </select>
          </div>
          <div className='product-form-right'>
            <div className='product-upload'>
              <img
                src='https://c.dns-shop.ru/thumb/st4/fit/500/500/09c50606653675238ed02812aa657c11/59de6320f493725826694a79866ccdeca2269749aac4e5920bdce32770aba98e.jpg.webp'
                alt='playstation 5 box'
                className='product-upload-img'
              />
            </div>
            <button className='product-button'>Обновить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
