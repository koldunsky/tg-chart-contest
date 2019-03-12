import chartData from './chart_data.json';
import Chart from './components/Chart';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.querySelector('#app');

  new Chart(rootEl, chartData[0]);
});