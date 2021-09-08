import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import dolarImg from '../../assets/total-acessos.svg';
import arrowUpImg from '../../assets/acessos-horas.svg';
import arrowDownImg from '../../assets/conclusao.svg';
import TimeImg from '../../assets/media.svg';


import { Container }  from './styles';

interface IIndicatorBoxProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown' | 'Time';
    color: string;
    text: string;
}

const IndicatorBox: React.FC<IIndicatorBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color,
    text
}) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp': 
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            case 'Time':
                return TimeImg;
            default:
              return undefined;
        }
    },[icon]);

    return (
        <Container color={color}>
            <span>Total <br/>de acessos</span>
            <h1>                
                <CountUp 
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={0}    
                             
                />
            </h1>
            
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title} />
            <h3> {text} </h3>
        </Container>
    );
}

export default IndicatorBox;