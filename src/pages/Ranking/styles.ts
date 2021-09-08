import styled from 'styled-components';


export const Container = styled.div`
    justify-content:center;
    align-items:center;

    /* display: flex; */
    /* text-align: center; */
    /* margin-top:25%; */
    /* width: 100%;
    height: 100vh; */

    span > {
        justify-content:center;
        align-items:center;
        display: flex;
        position:relative;


    }


    h1 >{
        justify-content:center;
        align-items:center;
        display: flex;
    

    }


    div > h1 {
        font-size:12px;
        color: #545454;
        justify-content:center;
        align-items:center;
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        text-align: center;

    }

    > Table {
        -webkit-box-shadow: 0px 0px 12px -8px #000000; 
        box-shadow: 0px 0px 12px -8px #000000;
    }
`;



export const Content = styled.div`
    display: table-flex;
    justify-content: space-between;
    
    width: 100%;
    justify-content:center;
    align-items:center;

    
`;

export const Table = styled.thead`
    position: absolute;
    margin-top: 50px;
    border-radius: 45px;
    


    color: ${props => props.theme.colors.black};

    background-color: ${props => props.theme.colors.tertiary};
    border-color: ${props => props.theme.colors.warning}


    


`;


