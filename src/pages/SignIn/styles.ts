import styled from 'styled-components';

// import bgVideo from '../../components/video/video.mp4';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;

    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};

    > img {
        width: 100%;
        height: 100%;
        position: absolute;
    }

`;

export const Version = styled.div`

    > div {
        position: absolute;
        color: ${props => props.theme.colors.gray};
        font-size: 10px;
        bottom: 5px;
        left: 5px;
        z-index:1;
    }

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    z-index:1;

    margin-bottom: 30px;

    > h2 {
        /* color: ${props => props.theme.colors.white};  */
        margin-left: 7px;
        margin-top:9px;
        font-size:18px;
        color: ${props => props.theme.colors.success};  
        font-style: italic;
    }

    > img {
        width: 140px;
        height: 40px;
    }

    /* > h1 {
        width:50px;
        position:relative;
        align-items:center;
    } */
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;
    z-index:1;

    padding: 30px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;

    color: ${props => props.theme.colors.titleForm}; 

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.success};  
    }
`;

