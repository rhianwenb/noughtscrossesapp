import React from 'react';

import '../styles/Square.css';

export default function Square({value}) {


  return (
    <div>
        
        <button className="square"> {value} </button>

    </div>
  )
};