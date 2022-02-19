import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "../Themes";


interface ThemeType {
  theme: ThemeProps;
}


export const Globalcss = createGlobalStyle<ThemeType>`
*{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box; 
    }
    :root{
   --main-bg-color: #1e202a;
   --dark-text-color: #8284b2;

   --light-bg: #fff;
   --dark-bg: #1e202a;
   --light-text: #363537; 
   --dark-text: #fff; //#8284b2
   --cardbg-dark: #252a41;
   --cardbg-light: #f0f2fa;
   --cardtext-dark: #63687e;
   --cardtext-light: #9d9da0;
   --followers-light: #222222;
   --followers-dark: #fff;
   --cardhover-light: #e4e4e4;
   --cardhover-dark: #40486d;
   --shadow-light: #b4b1b16f;
   --shadow-dark: #222222;
 }
 body{
    background: ${({theme}) => theme.background}};
    color: ${({theme}) => theme.color}};
     font-family: 'Inter', sans-serif;
     transition: all 0.50s linear;
 }   
 
`