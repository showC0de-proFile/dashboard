import React, {useState} from 'react';
import Toggle from '../Toggle';

import {
    MdExitToApp,
    MdClose,
    MdMenu, 
    MdHome,
    MdGrade
} from 'react-icons/md';

import logoImg from '../../assets/logo-mp.svg';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';



import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
}  from './styles';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);


    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }


    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }


    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo Dashboard" />
                {/* <Title>Analytics</Title> */}
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdHome color="#2695F9" size="1.4em"/>
                    Visão geral
                </MenuItemLink>

                <MenuItemLink href="/ranking">
                    <MdGrade color="#2695F9" size="1.4em" />
                    Ranking
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp color="#2695F9" size="1.4em" />
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;