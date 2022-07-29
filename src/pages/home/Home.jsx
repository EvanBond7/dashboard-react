import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../db.js';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='Активность пользователей'
        dataKey='Активные пользователи'
        grid
      />
    </div>
  );
}
