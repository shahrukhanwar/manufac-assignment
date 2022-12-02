import './App.css';
import { useState, useEffect } from 'react';

import ScatterChart from './components/ScatterChart';
import BarChart from './components/BarChart';
import ThemeSwitcher from './components/ThemeSwitcher';
import data from './data.json';
import { transformData } from './utils';

function App() {
  const [scatterChartData, setScatterChartData] = useState([]);
  const [barChartData, setBarChartData] = useState({
    categories: [],
    data: [],
  });
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const { scatterData, barData } = transformData(data);
    setScatterChartData(scatterData);
    setBarChartData(barData);
  }, []);

  return (
    <div>
      <ThemeSwitcher
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <ScatterChart data={scatterChartData} isDarkTheme={isDarkTheme} />
      <BarChart data={barChartData} isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
