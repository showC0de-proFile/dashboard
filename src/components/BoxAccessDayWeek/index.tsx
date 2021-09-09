import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import { Bar } from "react-chartjs-2";

import { Container }  from './styles';

interface IBoxAccessPeriodProps {
    title: string;
    amount: number;
    footerlabel: string;
    color: string;
}


const data = {
  labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  datasets: [
    {
      label: '',
      data: [9, 90, 81, 74, 99, 70, 41],
      backgroundColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
      
    },
  ],
}
  
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}





const BoxAccessPeriod: React.FC<IBoxAccessPeriodProps> = ({
    title,
    amount,
    footerlabel,
    color
}) => {
    return (
        <Container color={color}>
            <span>{title}</span>
            

            <>                
              <Bar data={data} options={options} />
            </>
            <small>{footerlabel}</small>
        </Container>
    );
}

export default BoxAccessPeriod;