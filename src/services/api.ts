    import axios from 'axios';
    import {sortArrayObjects} from '../utils/sortArrayObjects';
    



    const baseURL = 'https://script.google.com/macros/s/AKfycbyylQTbX00NZtSMDQtaa99DNqKhEwC8o6lqMwP4fjmaLF8OUazw/exec';
    
    export interface ITaskCompleted {
        days: string;
        concluded: number;
        access: number;
    }

    export interface Task {        
        name: string;
        Data: string;
        total_time: string;
        final_score: string;
        concluded: boolean;
    }
    export class Api {
        tasks:Task[];

        constructor() {
            this.tasks = [];

        }

        async getData() {
            try {
                const server = await axios.get(baseURL);

                if(server.data) {
                    this.tasks = server.data;
                }

                // console.log('Tasks: ', this.tasks);
            } catch (error) {
                console.log('Error: ', error);
                this.tasks = [];
            }
        }

        getTasks() {
            
            let tasks = this.tasks.sort(sortArrayObjects(['final_score', 'name'],'desc'));
            return this.tasks;

        }

        getUserTotalScore() {
            
            let usersScore = this.tasks.slice(0, 3).sort(sortArrayObjects(['final_score', 'name'],'desc'));
            return usersScore;

        }


        getUserTotalTime() {            
            let usersTime = this.tasks.slice(0, 3).sort(sortArrayObjects(['total_time', 'name'],'asc'));
            return usersTime;

        }

        
        getTotalTasks(monthSelected:number, yearSelected:number) {
            let total: number = 0;

            this.tasks.forEach(item => {
                const date = new Date(item.Data);
                

                if(date.getTime()) {
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();

                    if(month === monthSelected && year === yearSelected){
                        total++;
                    }
                }
            });

            return total;
        }

        getTotalDurationAverage(monthSelected:number, yearSelected:number) {
            let total: number = 0;
            let duration: number = 0;
            

            this.tasks.forEach(item => {
                const date = new Date(item.Data);

                if(date.getTime()) {
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();

                    if(month === monthSelected && year === yearSelected){
                        total++;
                        
                        let time = item.total_time.replace("'", "").split(':');
                        
                        duration += (parseInt(time[0])*60*60) + (parseInt(time[1])*60) + parseInt(time[2]);

                        // console.log("duration", duration);
                        

                    }
                }
            });

            return duration / total /60;
        }

        getTotalTasks24Hours() {
            let total: number = 0;

            let today = new Date();
            let yesterday = new Date();
            
            yesterday.setHours(today.getHours()-24);
            
            this.tasks.forEach(item => {        
                
                const date = new Date(item.Data)


                // let converterLocale = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
                // console.log('converter', converterLocale);
                
                    

                if(date.getTime()) {
                    // console.log('today', today);
                    // console.log('yesterday', yesterday);
                    // console.log('date', date);

                    
                    if(date >= yesterday && date <= today ){
                        total ++;
                    }
                }
            });

            return total;
        }

        getConcludedByDayGraphic(){

            let days:string[] = [];
            let concluded:number[] = [];

            this.tasks.sort(sortArrayObjects(['Data'],'asc')).forEach(item => {
                const date = new Date (item.Data);
                

                if(date.getTime() && item.concluded) {
                    const dateTime = item.Data.split('T');

                    if (days.indexOf(dateTime[0]) == -1) {
                        days.push(dateTime[0]);
                    }

                    // console.log('dataTime', date);
                    
                    // se o dia 1 estiver 0 na variável days, vai ser a mesma posição do concluded. 
                    let cont =  concluded[days.indexOf(dateTime[0])]; 
                    // retorno a mesma posição do dia 
                    concluded[days.indexOf(dateTime[0])] = cont ? cont + 1 : 1;   
                }

            });
            
            let completeds:ITaskCompleted[] = [];
            days.forEach ((day, index) => {
                completeds.push({days:day, concluded:concluded[index], access:0 });

            })

            return completeds;

        }

        getTotalConcludedFinish(){
            let completedCount:number = 0;

            this.tasks.forEach(item => {
                if (item.concluded) {
                    completedCount++;
                }

                // console.log('complete Count', completedCount);

            });
                
            return completedCount;
            
        }

        


        getPeriodAccess() {
            let morningNB:number = 0;
            let afternoonNB:number = 0;
            let nightNB:number = 0;
            let midnightNB:number = 0;

            this.tasks.forEach(item => {
                const date = new Date(item.Data);
                
                if(date.getTime()) {
                    const dateTime = item.Data.split('T');
                    let hour = dateTime[1].toString().split(':');
                    let hourNumber:number = parseInt(hour[0]);

                    if(hourNumber >= 0 && hourNumber < 6){
                        midnightNB++;
                    }else if(hourNumber >= 6 && hourNumber < 12){
                        morningNB++;
                    }else if(hourNumber >= 12 && hourNumber < 18){
                        afternoonNB++;
                    }else{
                        nightNB++;
                    }
                }
            });

            let periodData:number[] = [morningNB, afternoonNB, nightNB, midnightNB];

            // periodData.push({morning:morningNB, afternoon:afternoonNB, night:nightNB, midnight:midnightNB});

            console.log("perioData", periodData);

            return periodData;
        }


        getAccessByDayGraphic(){

            let days:string[] = [];
            let concluded:number[] = [];
            let access:number[] = [];

            this.tasks.sort(sortArrayObjects(['Data'],'asc')).forEach(item => {
                const date = new Date (item.Data);
                

                if(date.getTime()) {
                    const dateTime = item.Data.split('T');

                    if (days.indexOf(dateTime[0]) == -1) {
                        days.push(dateTime[0]);
                    }

                    console.log('dataTime', date);
                                        
                    // retorno a mesma posição do dia 
                    if (item.concluded){
                        // se o dia 1 estiver 0 na variável days, vai ser a mesma posição do concluded. 
                        let cont =  concluded[days.indexOf(dateTime[0])]; 
                        
                        concluded[days.indexOf(dateTime[0])] = cont ? cont + 1 : 1;
                    }   
                    
                    let contAccess =  access[days.indexOf(dateTime[0])]; 
                    access[days.indexOf(dateTime[0])] = contAccess ? contAccess + 1 : 1;
                    
                }

            });
            
            let completeds:ITaskCompleted[] = [];
            days.forEach ((day, index) => {
                completeds.push({days:day, concluded:concluded[index], access:access[index]});

            })

            return completeds;

        }
        

    }


