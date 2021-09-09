import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
    
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            quartenary: string;
    
            white: string;
            black: string;
            middleGray: string;
            gray: string;
            grayLight: string;
    
            colorTextButton: string;
            titleForm: string;


            success: string;
            info: string;
            warning: string;
        },
    };
}