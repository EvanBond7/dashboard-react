import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './chart.css';

export default function Chart({
  title,
  data,
  dataKey,
  grid,
  colorX,
  colorLine,
}) {
  return (
    <div className='chart'>
      <h3 className='chart-title'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke={colorX} />
          <Line type='monotone' dataKey={dataKey} stroke={colorLine} />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
