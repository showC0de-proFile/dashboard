  import React, {useState, useEffect} from 'react';
  import {Table, Pagination, Button} from 'react-bootstrap';
  import {Api, Task} from '../../services/api';
  import formatDateTime from '../../utils/formatDateTime';

  // import BoxRankingIndicator from '../../components/BoxRankingIndicator';
  import BoxRankingIndicator from '../../components/BoxRankingIndicator';

  import { css } from "@emotion/core";
  import ClipLoader from "react-spinners/RingLoader";

  import { jsPDF } from "jspdf";

  import Crown from '../../assets/crown.svg';
  import SartPoints from '../../assets/star.svg';
  import Calendar from '../../assets/calendar.svg';
  import Clock from '../../assets/clock-2.svg';
  // import ClockTime from '../../assets/clock-time.svg';


  import {
    Container,
    Content,
  } from './styles';


  function Tasks(): JSX.Element {

    const override = css`
      display: block;
      margin: 0 auto;
      margin-top: 25%;
      position: relative;


    `;

    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#2695F9");

    const [tasks, setTasks] = useState<Task[]>([]);

    const [usersScore, setScore] = useState<Task[]>([]);
    const [usersTime, setTime] = useState<Task[]>([]);
    
    
    
    const [pages, setPages] = useState(0);
    const [pageActive, setPageActive] = useState(1);

    

    useEffect(() => {
      loadApi();

    }, []);

    async function loadApi() {
      let api = new Api();

      setLoading(true);

      await api.getData();
      
      let tasks = api.getTasks();

      let totalPages = Math.ceil(tasks.length/20);

      
      setScore(api.getUserTotalScore());
      setTime(api.getUserTotalTime());
      
      setPages(totalPages);

      setTasks(tasks);    

      setLoading(false);
    }

    function setPage (page:number){      
      setPageActive(page)

    }

    function paginationItem (): JSX.Element[] {
      let itens = [];

      for (let i = 1; i <= pages; i++){
        itens.push( 
          <Pagination.Item key={i} active={i === pageActive} onClick={(event) => setPage(i)} >
            {i}       
                                
          </Pagination.Item>

        )

      }
      return itens;
    }

    return (



  <Container>
      <Content>
        <div>
          {

          loading ?

            <div className="sweet-loading">
              <h1>
                <ClipLoader color={color} loading={loading} css={override} size={90} />
                <div>Carregando</div>
              </h1>

            </div>


          :        
          <>
          
          <BoxRankingIndicator 
              title="Pontuações em Destaque"
              color="#2695F9"
              amount={50}
              footerlabel=""
              icon="Ranking"
              text="minutos"
              users={usersScore}
              istime={true}
              
          />

          
          <BoxRankingIndicator 
              title="Destaques por Tempo"
              color="#2695F9"
              amount={50}
              footerlabel=""
              icon="Flash"
              text="minutos"
              users={usersTime}
              istime={false}
              
          />


          
          
          {/* <Button variant="dark">PDF</Button>{' '}
          <Button variant="dark">EXCEL</Button>{' '} */}


                {/* <Pagination size="sm" style={{marginRight: '50px', position: "absolute"}}>
                  {
                    paginationItem ()
                  }
                </Pagination> */}
                          
        
                <Table id='ExcelExport' striped bordered hover variant="light">
                  <thead style={{ color: '#054267', fontWeight: 'bold', backgroundColor: '#FFFFFF' }}>
                    <tr>
                      <th style={{ color: '#054267', textAlign: 'center', backgroundColor: '#fff' }}> </th>
                      <th>Nome</th>
                      <th>Tempo</th>
                      <th>Data</th>
                      <th>Pontuação</th>
                    </tr>
                  </thead>

                  

                  <tbody>

                    {tasks.slice(20*(pageActive-1), 20*pageActive).map((task, index) => (
                      <tr key={index} style={index < 10 ? { color: '#166493', backgroundColor: '#fff', fontSize:'14px', borderBottom: '2px solid #DCDCDC'} : { color: '#394144', fontSize:'14px' }}>
                        <td style={{ color: '#054267', textAlign: 'center', fontWeight: 'bold', fontSize:'20px' }}> {(index + 1)+(20*(pageActive-1))} </td>

                        {
                          ((index + 1)+(20*(pageActive-1))) == 1 ? 
                            <td> <img src={Crown} width='20px'/> {task.name} </td>
                          : 
                            <td> {task.name} </td>
                        }

                        <td> <img src={Clock} width='15px'/> {task.total_time} </td>
                        <td> <img src={Calendar} width='20px'/> {formatDateTime(task.Data)}</td>
                        <td> <img src={SartPoints} width='20px'/> {task.final_score}</td>

                      </tr>

                    ))}


                  </tbody>
                </Table>

                <Pagination size="sm">
                  {
                    paginationItem ()
                  }
                </Pagination>

              </>

          }
        </div>
        </Content>
      </Container>

    )
  }

  export default Tasks
