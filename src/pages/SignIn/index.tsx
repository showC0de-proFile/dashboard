import React, {useState} from 'react';

import logoImgB from '../../assets/logo-mp-branco.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import bgSigin from '../../assets/backgrounds/analytics-bg8.jpg';

// import bgVideo from '../../assets/video.mp4';



import {
    Container,
    Logo,
    Form,
    FormTitle,
    Version
    
} from './styles';

const SignIn: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');    

    const { signIn } = useAuth();

    return (
        <Container>

            
            <Logo>
                <img src={logoImgB} alt="Dashboard Analytics" /> 
                <h2>analytics</h2>
            </Logo>

            <Form onSubmit={() => signIn(name, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input 
                    type="name"
                    placeholder="nome"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

               <Button type="submit">Acessar</Button>
            </Form>
{/* 
            <video width="100%" height="100%" controls >
                <source src={bgVideo} type="video/mp4"/>
            </video> */}

            <img src={bgSigin} alt="myDashboard"/>

            <Version>
                <div>Dashboard - Analytics - Versão 1.2.0</div> 
            </Version>
        </Container>

    

    );
}

export default SignIn;