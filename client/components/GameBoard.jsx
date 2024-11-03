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
                    <Square value="1"/>
                    <Square value="2"/>
                    <Square value="3"/>
                </div>
                <div className="board-row">
                    <Square value="4"/>
                    <Square value="5"/>
                    <Square value="6"/>
                </div>
                <div className="board-row">
                    <Square value="7"/>
                    <Square value="8"/>
                    <Square value="9"/>
                </div>

            </div>


        </div>
    
    </>
  )
};
