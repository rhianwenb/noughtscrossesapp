import React from 'react';
import { useState } from 'react';

import '../styles/Square.css';

export default function Square() {

    const [value, setValue] = useState(null)


    function handleClick() {
        setValue("X");
    };

  return (
    <div>
        
        <button className="square"
        onClick={handleClick} > 
            {value} 
        </button>

    </div>
  )
};