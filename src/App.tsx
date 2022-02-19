import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import { Globalcss } from './Styles/global';
import { LightTheme, DarkTheme } from './Themes';
import { useTheme } from './Hooks/UseTheme';


const App:React.FC= () => {

   const{theme, toggleHandler} = useTheme();   

  return (
    <ThemeProvider theme={theme === 'dark' ? LightTheme : DarkTheme}>
    <Globalcss />
    <div className="App">
       <Home toggleHandler={toggleHandler}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
