import React from 'react';
import Home from './Pages/Home';
import { Globalcss } from './Styles/global';

const App:React.FC = () => {
  return (
    <>
    <Globalcss />
    <div className="App">
       <Home />
    </div>
    </>
  );
}

export default App;
