import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = ({ data, isDarkTheme }) => {
  const options = {
    xAxis: {
      type: 'category',
      data: data.categories,
      name: 'Alcohol',
      nameLocation: 'center',
      nameGap: 24,
    },
    yAxis: {
      type: 'value',
      name: 'Malic Acid',
      nameLocation: 'center',
      nameGap: 24,
    },
    series: [
      {
        data: data.data,
        type: 'bar',
      },
    ],
  };

  return (
    <ReactECharts option={options} theme={isDarkTheme ? 'dark' : 'light'} />
  );
};

export default BarChart;
