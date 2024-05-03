import React from 'react';
import './CartBar.css';

const ChartBar = () => {
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill'></div>
      </div>
      <div className='chart-bar__label'></div>
    </div>
  )
}

export default ChartBar;