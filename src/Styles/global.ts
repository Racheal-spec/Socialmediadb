import { createGlobalStyle } from "styled-components";


export const Globalcss = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box; 
    }
 body{
    background: var(--main-bg-color);
     color: white;
     font-family: 'Inter', sans-serif;
 }   
 :root{
   --main-bg-color: #1e202a;
   --dark-text-color: #8284b2;
 }
`