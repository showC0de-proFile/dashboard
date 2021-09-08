import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {Api, Task, ITaskCompleted} from '../../services/api';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import BoxAverageAccess from '../../components/BoxAverageAccess';
import BoxTotalAccess from '../../components/BoxTotalAccess';
import BoxAccessPeriod from '../../components/BoxAccessPeriod';
import BoxActiveEvolution from '../../components/BoxActiveEvolution';
import BoxAccessDayWeek from '../../components/BoxAccessDayWeek';
import BoxAccessLastHours from '../../components/BoxAccessLastHours';
import BoxTotalConclusion from '../../components/BoxTotalConclusion';
import BoxAccessDevices from '../../components/BoxAccessDevices';


import PieChartBoxDevices from '../../components/PieChartBoxDevices';
import PieChartBoxDay from '../../components/PieChartBoxDay';

import HistoryBox from '../../components/HistoryAccessDay';
import HistoryConcludedDay from '../../components/HistoryConcludedDay'

import expenses from '../../services/expenses';
import gains from '../../services/gains';

import listOfMonths from '../../utils/months';



import { 
    Container,
    Content, 
} from './styles';

var api:Api;

const Dashboard: React.FC = (): JSX.Element => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [totalExpenses, setTotalExpenses] = useState<number>(0);
    const [totalBalance, setTotalBalance] = useState<number>(0);
    const [totalGains, setTotalGains] = useState<number>(0);
    const [totalDuration, setTotalDuration] = useState<number>(0);
    
    const [totalConcluded, setTotalConcluded] = useState<ITaskCompleted[]>([]);
    const [totalAccess, setTotalAccess] = useState<ITaskCompleted[]>([]);    
    
    const [totalConcludedFinish, setTotalConcludedFinish] = useState<number>(0);
    const [totalPeriod, setPeriodAccess] = useState<number[]>([]);


    


    useEffect(() => {
      loadApi();
    }, []);

    useEffect(() => {
      loadData();
    }, [monthSelected, yearSelected]);
  
    async function loadApi() {
      api = new Api();
      await api.getData();
      loadData();
    }
  
    function loadData() {
        setTotalBalance(api.getTotalTasks(monthSelected, yearSelected));
        setTotalGains(api.getTotalTasks24Hours());
        setTotalDuration(api.getTotalDurationAverage(monthSelected, yearSelected));
        
        setTotalConcluded(api.getConcludedByDayGraphic());
        setTotalAccess(api.getAccessByDayGraphic());
        
        setTotalConcludedFinish(api.getTotalConcludedFinish());
        
        setPeriodAccess(api.getPeriodAccess());
    }

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
           }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    },[]);


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    },[]);

    

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name: "Desktop",
                value: totalGains,
                percent: percentGains ? percentGains : 0, 
                color: '#2695F9'
            },
            {
                name: "Mobile",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0, 
                color: '#8800FF'
            },
        ];

        return data;
    },[totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
            
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){
                    try{
                        amountEntry += Number(gain.amount);
                    }catch{
                        throw new Error('amountEntry is invalid. amountEntry must be valid number.')
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try{
                        amountOutput += Number(expense.amount);
                    }catch{
                        throw new Error('amountOutput is invalid. amountOutput must be valid number.')
                    }
                }
            });


            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput
            }
        })
        .filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        });
    },[yearSelected]);

    


    

    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch{
            throw new Error('invalid month value. Is accept 0 - 24.')
        }
    },[]);


    const handleYearSelected = useCallback((year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch{
            throw new Error('invalid year value. Is accept integer numbers.')
        }
    },[]);


    return (
        <Container>
            <ContentHeader title="" lineColor="#2695F9">
                <SelectInput 
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Content>
                <BoxTotalAccess 
                    title="Total de acessos"
                    color="#2695F9"
                    amount={totalBalance}
                    footerlabel=""
                    icon="dolar"
                    text=" "
                />

                <BoxAccessLastHours 
                    title="Acessos 24horas"
                    color="#2695F9"
                    amount={totalGains}
                    footerlabel=""
                    icon="arrowUp"
                    text=" "
                />

                <BoxTotalConclusion 
                    title="Total de conclusões"
                    color="#2695F9"
                    amount={totalConcludedFinish}
                    footerlabel=""
                    icon="arrowDown"
                    text=" "
                />


                <BoxAverageAccess 
                    title="Duração acesso / média"
                    color="#2695F9"
                    amount={totalDuration}
                    footerlabel=""
                    icon="Time"
                    text="minutos"
                />

                {/* init indicator */}

                
                
                <BoxAccessPeriod 
                    title="Acessos por período"
                    amount={0}
                    footerlabel=""
                    color="#2695F9"
                    period = {totalPeriod}
                    
                    // icon="arrowUp"
                />

                {/* <PieChartBoxDay data={relationExpensesVersusGains} /> */}

                <BoxAccessDayWeek 
                    title="Acessos por dias da semana"
                    color="#2695F9"
                    amount={totalGains}
                    footerlabel=""
                    // icon="arrowUp"
                />
                
                
                <BoxActiveEvolution 
                    title="% Acertos atividades e avaliações"
                    color="#2695F9"
                    amount={totalGains}
                    footerlabel=""
                    // icon="dolar"
                    
                />


                <BoxAccessDevices 
                    title="Acesso por device"
                    color="#2695F9"
                    amount={totalGains}
                    footerlabel=""
                    // icon="dolar"
                    
                />

                <HistoryBox 
                    data={totalConcluded} 
                    lineColorAmountEntry="#3399FF"                    
                />

                
                <HistoryConcludedDay 
                    data={totalAccess} 
                    lineColorAmountEntry="#8800FF"
                    lineColorAccess="#3399FF"                    
                    
                />
                
            </Content>
        </Container>
    );
}

export default Dashboard;