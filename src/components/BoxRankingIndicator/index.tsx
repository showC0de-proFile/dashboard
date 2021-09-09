import React, {useState, useEffect, useMemo} from 'react';
import CountUp from 'react-countup';

import {Table, Pagination, Button, Col, Row} from 'react-bootstrap';

import dolarImg from '../../assets/total-acessos.svg';
import arrowUpImg from '../../assets/acessos-horas.svg';
import Flash from '../../assets/clock-time.svg';
import Ranking from '../../assets/ranking.svg';
import SartPoints from '../../assets/star.svg';

import {Task} from '../../services/api';
import Crown from '../../assets/crown.svg';

import formatDateTime from '../../utils/formatDateTime';


import { Container }  from './styles';
import { isNamedExportBindings } from 'typescript';

interface IBoxRankingIndicatorProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'Flash' | 'Ranking';
    color: string;
    text: string;
    users: Array<Task>;
    istime: boolean;
    
}



const BoxRankingIndicator: React.FC<IBoxRankingIndicatorProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color,
    text,
    users,
    istime
    
    
}) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp': 
                return arrowUpImg;
            case 'Flash':
                return Flash;
            case 'Ranking':
                return Ranking;
            default:
              return undefined;
        }
    },[icon]);

    

    return (
        
        <>
        
        <Container color={color}>
            
            <>
                {users.map((user, index) => (
                    <>
                    <div className='userName'>
                    <Table id='ExcelExport'   variant="light" >
                        <tbody>
                            <tr key={index} >
                                <Row>
                                    <Col xs={1}style={{ color: '#054267', fontWeight: 'bold', fontSize:'14px', backgroundColor: '#fff'}}> {index + 1} </Col>
                                    
                                    <Col xs={4}style={{ color: '#3c87b6', fontWeight: 'bold', fontSize:'12px' , backgroundColor: '#fff'}}>  {user.name} </Col>


                                    {
                                        istime ? 
                                            <Col xs={5} style={{ color: '#000000', fontWeight: 'bold', backgroundColor: '#fff'}}> <img src={SartPoints} width='20px'/> {user.final_score} pontos </Col>
                                        :  
                                            <Col xs={5} style={{ color: '#020202', fontWeight: 'bold', backgroundColor: '#fff'}}>  {user.total_time} tempo </Col>
                                    }
                                    
                                    
                                </Row>
                            </tr>
                        </tbody>
                    </Table> 
                    </div>
                        
                    </>
                                                          

                ))}

            </>


            


            

            

          

          <span>{title}</span>
          <div></div>
          <strong></strong>
          <img src={iconSelected} alt={title} />
        
        {/* <h1>
          <CountUp
            end={amount}
            separator="."
            decimal=","
            decimals={0} />
        </h1> */}

        {/* <small>{footerlabel}</small> */}
        
        {/* <h3> {text} </h3> */}
      
        
      </Container>
      
        
        
        </>
    );  
}

export default BoxRankingIndicator;


