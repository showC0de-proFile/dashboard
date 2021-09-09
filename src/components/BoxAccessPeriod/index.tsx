import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import { HorizontalBar } from "react-chartjs-2";

import { Container }  from './styles';



interface IBoxAccessPeriodProps {
    title: string;
    amount: number;
    footerlabel: string;
    color: string;
    period: number[];
}



const BoxAccessPeriod: React.FC<IBoxAccessPeriodProps> = ({
    title,
    amount,
    footerlabel,
    color,
    period
}) => {

  const data = {
    labels: ['Manhã', 'Tarde', 'Noite', 'Madrugada'],
    datasets: [
      {
        label: '',        
        data: period,
        backgroundColor: [
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
          
        ],
        borderWidth: 1,
        
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  }
    return (

      
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong></strong>
                {/* <CountUp 
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}                                    
                /> */}                  

            </h1>
                
            <>                       
              <HorizontalBar 
                data={data} 
                options={options} 
                // width={100}
                // height={50}
                
                />
            </>
            
        </Container>
    );
}

export default BoxAccessPeriod;