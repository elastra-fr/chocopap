import React from 'react'
import './CustomNumberInput.css'

function CustomNumberInput({id, value, change}) {
  return (
    <div key={id}>
        <input className="customInputNumber" type="number" id={value} value={value} onChange={change} min="1" max="999"/>
    </div>
  )
}

export default CustomNumberInput