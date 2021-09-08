import React from 'react';

import IconNight from '../../assets/moon.svg';
import IconDay from '../../assets/sun.svg';
import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';


interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
    labelLeft,
    labelRight,
    checked,
    onChange
}) => (
    <Container>
         

        <ToggleLabel>{<img src={IconDay} width="30px" alt="Claro"/>}</ToggleLabel>
        <ToggleSelector                    
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}
        />
        <ToggleLabel>{<img src={IconNight} width="20px" alt="Escuro"/>}</ToggleLabel>

    </Container>
)

export default Toggle;