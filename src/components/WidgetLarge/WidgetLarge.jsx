import React from 'react';
import './widgetLarge.css';
import customerProfile from '../../assets/profile/customer_profile.png';

export default function WidgetLarge() {
  const Button = ({ type, status }) => {
    return <button className={'widget-lg-button ' + type}>{status}</button>;
  };

  return (
    <div className='widget-lg'>
      <h3 className='widget-lg-title'>Последние транзакции</h3>
      <table className='widget-lg-table'>
        <tr className='widget-lg-tr'>
          <th className='widget-lg-th'>Покупатель</th>
          <th className='widget-lg-th'>Дата</th>
          <th className='widget-lg-th'>Сумма</th>
          <th className='widget-lg-th'>Статус</th>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img
              src={customerProfile}
              alt='покупатель'
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>17 Мая 2022</td>
          <td className='widget-lg-amount'>50000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button status='Выполнена' type='Approved' />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img
              src={customerProfile}
              alt='покупатель'
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>12 Мая 2022</td>
          <td className='widget-lg-amount'>50000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button status='Выполнена' type='Approved' />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img
              src={customerProfile}
              alt='покупатель'
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>7 Мая 2022</td>
          <td className='widget-lg-amount'>50000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button type='Declined' status='Отказ' />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img
              src={customerProfile}
              alt='покупатель'
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>4 Мая 2022</td>
          <td className='widget-lg-amount'>50000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button type='Pending' status='Ожидание' />
          </td>
        </tr>
      </table>
    </div>
  );
}
