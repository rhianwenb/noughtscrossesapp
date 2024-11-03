import React from 'react';

import Square from './Square';
import '../styles/GameBoard.css';


export default function GameBoard() {


  return (
    <>

        <div className="gameboard">
            <div className="instructions"> Let's Play! </div> 
            
            <div className="main-square">

                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>

            </div>


        </div>
    
    </>
  )
};
