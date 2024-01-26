import React from 'react'
import './CustomNumberInput.css'

function CustomNumberInput({id, value, change, min}) {
  return (
    <div key={id}>
        <input className="customInputNumber" type="number" id={value} value={value} onChange={change} min={min} max="999"/>
    </div>
  )
}

export default CustomNumberInput