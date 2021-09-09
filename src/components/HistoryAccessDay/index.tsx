import React from 'react';
import {ITaskCompleted} from '../../services/api';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import { 
    Container, 
    ChartContainer,
    Header,
    LegendContainer,
    Legend,
}  from './styles';


interface IHistoryBoxProps {
    data: ITaskCompleted[],
    lineColorAmountEntry: string;
    
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry
}) => (
    <Container>
        <Header>
            <h2>Quantidade de conclusões por dia</h2>

            <LegendContainer>
                {/* <Legend color={lineColorAmountEntry}>
                    <div></div>
                    <span>Concluídos</span>
                </Legend>
           
                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>Pendentes</span>
                </Legend> */}
            </LegendContainer>
        </Header>

        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="days" stroke="#cecece" />
                    <Tooltip formatter={(value) => value} />
                    <Line 
                        type="monotone"                
                        dataKey="concluded"
                        name="Conclusões"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 5}}
                        activeDot={{ r: 8}}
                    />


                    
                    
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)

export default HistoryBox;