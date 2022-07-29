import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <span className='featured-title'>Доход</span>
        <div className='featured-money-container'>
          <span className='featured-money'>2,520&#x20bd;</span>
          <span className='featured-money-rate'>
            -12.7 <ArrowDownward className='featured-icon negavite' />
          </span>
        </div>
        <span className='featured-sub'>Сравнить с последним месяцем</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Продажи</span>
        <div className='featured-money-container'>
          <span className='featured-money'>5,200&#x20bd;</span>
          <span className='featured-money-rate'>
            -3.5 <ArrowDownward className='featured-icon negavite' />
          </span>
        </div>
        <span className='featured-sub'>Сравнить с последним месяцем</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Расходы</span>
        <div className='featured-money-container'>
          <span className='featured-money'>1,700&#x20bd;</span>
          <span className='featured-money-rate'>
            +2.5 <ArrowUpward className='featured-icon' />
          </span>
        </div>
        <span className='featured-sub'>Сравнить с последним месяцем</span>
      </div>
    </div>
  );
}
