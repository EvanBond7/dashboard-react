import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/Chart/Chart';
import { productData } from '../../db';
import { Publish } from '@material-ui/icons';

export default function Product() {
  return (
    <div className='product'>
      <div className='product-title-container'>
        <h1 className='product-title'>Продукт</h1>
        <Link to='/newproduct'>
          <button className='product-add-button'>Создать</button>
        </Link>
      </div>
      <div className='product-top'>
        <div className='product-top-left'>
          <Chart
            data={productData}
            dataKey='Sales'
            title='Продажи за первый квартал'
          />
        </div>
        <div className='product-top-right'>
          <div className='product-info-top'>
            <img
              src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='product-info-img'
            />
            <span className='product-name'>Sony Playstation 5</span>
          </div>
          <div className='product-info-bottom'>
            <div className='product-info-item'>
              <span className='product-info-key'>id:</span>
              <span className='product-info-value'>123</span>
            </div>
            <div className='product-info-item'>
              <span className='product-info-key'>sales:</span>
              <span className='product-info-value'>5123</span>
            </div>
            <div className='product-info-item'>
              <span className='product-info-key'>active:</span>
              <span className='product-info-value'>yes</span>
            </div>
            <div className='product-info-item'>
              <span className='product-info-key'>in stock:</span>
              <span className='product-info-value'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='product-bottom'>
        <form className='product-form'>
          <div className='product-form-left'>
            <label>Наименование Продукта</label>
            <input type='text' placeholder='Apple AirPod' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='product-form-right'>
            <div className='product-upload'>
              <img
                src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt=''
                className='product-upload-img'
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='product-button'>Обновить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
