import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts';



import { 
    Container,
    SideRight,
 }  from './styles';


 interface IPieChartProps {
     data: {
        name: string;
        value: number;
        percent: number;
        color: string;
     }[];
 }

const PieChartBoxDay: React.FC<IPieChartProps> = ({ data }) => (
    <Container>
        {/* <SideLeft>
            <h2>Acessos por dia da semana</h2>
            <LegendContainer>
                {
                    data.map((indicator) => (
                        <Legend key={indicator.name} color={indicator.color}>
                        <div>{indicator.percent}%</div>
                        <span>{indicator.name}</span>
                        </Legend>  
                    ))              
                }
            </LegendContainer>
        </SideLeft> */}

        <SideRight>
            <h2>Acessos por dia da semana</h2>

            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

export default PieChartBoxDay;