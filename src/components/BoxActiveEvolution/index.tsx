import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import { Pie } from "react-chartjs-2";


import { Container }  from './styles';


const data = {
    labels: ['Acertos'],
    datasets: [
      {
        label: '',
        data: [80, 20],
        backgroundColor: [
          'rgba(153, 102, 255, 1)',
          
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  }
  



interface IBoxActiveEvolutionProps {
    title: string;
    amount: number;
    footerlabel: string;
    color: string;
}

const BoxActiveEvolution: React.FC<IBoxActiveEvolutionProps> = ({
    title,
    amount,
    footerlabel,
    color
}) => {

   

    return (
        <Container color={color}>
            {/* <span>{title}</span>
            <h1>
                <strong></strong>
                <CountUp 
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}                                    
                />
            </h1>
            <small>{footerlabel}</small> */}

            <span>{title}</span>
            
            <>
                <Pie data={data} options={{ maintainAspectRatio: true }}/>
            </>
            


        </Container>
    );
}

export default BoxActiveEvolution;