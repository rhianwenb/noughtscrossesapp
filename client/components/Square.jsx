import React from 'react';
import { useState } from 'react';

import '../styles/Square.css';

export default function Square({value, onSquareClick}) {

    // const [value, setValue] = useState(null)



  return (
    <div>
        
        <button className="square"
        onClick={onSquareClick} > 
            {value} 
        </button>

    </div>
  )
};