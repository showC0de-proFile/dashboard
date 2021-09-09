import styled, {keyframes} from 'styled-components';

interface IContainerProps {
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{     
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;






export const Container = styled.div<IContainerProps>`
    width: 48%;
    height: 140px;

    /* display: inline-flex; */
    flex-direction: column;
    justify-content: space-between;

    margin: 10px 10px;
    
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.black};

    border-radius: 7px;
    /* padding: 10px 10px; */

    position: relative;
    overflow: hidden;

    float: right;
    /* margin-right: 0px; */

    animation: ${animate} .5s;

    -webkit-box-shadow: 0px 0px 12px -8px #000000; 
    box-shadow: 0px 0px 12px -8px #000000;

    > div {
        width: 100%;
        
        background-color:${props => props.theme.colors.black};
        height: 140px;
        position: relative;
        
        color: #000;

        right: -165px;
        display: flex;
        align-items: right;



    }

    > div.userCol {
        position:relative
    }
    
    
    > div.userName{
        height: 40px;
        
    }


    > div.userScore{
        height: 20px;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: 5px; 
        margin-left: 15px;
        top: 16px;
        position: relative;
    }
   
    .Col {
        clear:both;
        float:left;
        display:inline-block;

    }

    > span {
        font-size: 14px;
        width: 130px;
        position: absolute;
        margin: 0px;
        line-height:1;
        align-items: center;
        text-align: center;
        top: 15px;
        left: 23px;

    }

     > img {
        height: 50%;
        
        position: absolute;
        top: 55px;
        left: 50px;

    }

    /*

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
        
    }

    > h1 {
        font-size: 21px;
        position: absolute;
        top: 60px;
    }

    > h3 {
        font-size: 14px;
        position:absolute;
        bottom:7px;
        left: 50px;

    } */



    @media(max-width: 770px){
        > span {
            font-size: 10px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;

        > Col {
            display: flex
        }

        > h1 {
            display: flex;
            
            strong {
                position: initial;        
                width: auto;
                font-size: 22px;
            }

            strong:after {
                display: inline-block;
                content: '';
                width: 1px;                
            }
        }
    }
`;