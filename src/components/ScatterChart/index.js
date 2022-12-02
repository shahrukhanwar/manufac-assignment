import React from 'react';
import ReactECharts from 'echarts-for-react';

const ScatterChart = ({ data, isDarkTheme }) => {
  const options = {
    xAxis: {
      name: 'Color Intensity',
      nameLocation: 'center',
      nameGap: 24,
    },
    yAxis: {
      name: 'Hue',
      nameLocation: 'center',
      nameGap: 24,
    },
    series: [
      {
        symbolSize: 20,
        data: data,
        type: 'scatter',
      },
    ],
  };

  return (
    <ReactECharts option={options} theme={isDarkTheme ? 'dark' : 'light'} />
  );
};

export default ScatterChart;
