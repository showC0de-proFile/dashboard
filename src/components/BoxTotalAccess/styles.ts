import styled, {keyframes} from 'styled-components';
import BackgroundIndicator from '../../assets/background-indicator.jpg';

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
    width: 267px;
    height: 98px;
    border-radius: 15px;

    margin: 10px 0;
    font-family: Arial, Helvetica, sans-serif;


    /* background-color: ${props => props.color}; */
    color: ${props => props.theme.colors.black};

    background-image: url(${BackgroundIndicator});
    background-position: center;
    background-repeat: no-repeat;
    /* border-radius: 7px; */
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;



    > img {
        position: absolute;
        top: 30px;
        right: 40px;
        height: 50%;

        /* opacity: .3; */
    }

    > span {
        font-size: 14px;
        width: 120px;
        position: absolute;
        margin: 0px;
        line-height:1.3;
        left: 35px;
        top: 15px;

    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;

    }

    > h1 {
        font-size: 21px;
        position: absolute;
        top: 60px;
        left: 35px;
        font-weight:bold;
    }

    > h3 {
        font-size: 14px;
        position:absolute;
        bottom:8px;
        left: 50px;

    }



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