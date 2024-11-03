import { useState } from 'react';

import Login from '../components/Login.jsx';
import GameBoard from '../components/GameBoard.jsx';


import './App.css'


function App() {
  
  

  return (
    <>
    <div className="main-heading" >
      <header>
        <h1 > Noughts and Crosses </h1>
      </header>
    </div>

      <div> 
        <GameBoard />
      </div>
    </>
  )
};

export default App;
