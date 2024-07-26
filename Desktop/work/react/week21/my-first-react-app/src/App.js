import logo from './logo.svg';
import './App.css';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function App() {
  const data = {
    labels: ['Schlafen', 'Arbeit', 'Freizeit', 'Essen'],
    datasets: [
      {
        label: 'part',
        data: [8, 10, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(25, 66, 77, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="App"> 
  <Pie data={data}  width={20} height={20} />
    </div>
  );
}

export default App;
