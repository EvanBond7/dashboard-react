import React from 'react';
import './widgetLarge.css';

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
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
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>2 Мая 2022</td>
          <td className='widget-lg-amount'>5000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>2 Мая 2022</td>
          <td className='widget-lg-amount'>5000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>2 Мая 2022</td>
          <td className='widget-lg-amount'>5000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widget-lg-img'
            />
            <span className='widget-lg-name'>Евгений Зимин</span>
          </td>
          <td className='widget-lg-date'>2 Мая 2022</td>
          <td className='widget-lg-amount'>5000&#x20bd;</td>
          <td className='widget-lg-status'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  );
}
