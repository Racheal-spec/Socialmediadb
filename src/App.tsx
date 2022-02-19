import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import { Globalcss } from './Styles/global';
import { LightTheme, DarkTheme } from './Themes';


const App:React.FC = () => {

  const [apptheme, setAppTheme] = useState(false);

   const toggleHandler = () => {
     
     apptheme === true ? setAppTheme(true) : setAppTheme(false);
   }

   

  return (
    <ThemeProvider theme={apptheme === true ? LightTheme : DarkTheme}>
    <Globalcss />
    <div className="App">
       <Home toggleHandler={toggleHandler}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
