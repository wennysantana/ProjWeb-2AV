import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Fitness.module.css'; 

const FitnessCharts = () => {
  const data = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Horas de Exercício',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,100,0,1)',
        hoverBorderColor: 'rgba(0,0,0,1)',
        data: [3, 4, 2, 5, 6, 4, 7],
      },
    ],
  };

  return (
    <div className={styles.graphContainer}>
      <h2 className={styles.graphTitle}>Gráfico de Horas de Exercício por Dia da Semana</h2>
      <div className={styles.graph}>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default FitnessCharts;
