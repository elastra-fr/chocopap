import React from 'react'
import './CustomNumberInput.css'

function CustomNumberInput({id, value, change, min, focus}) {
  return (
    <div key={id}>
        <input className="customInputNumber" aria-label='Quantité en panier' type="number" id={id} value={value} onFocus={focus} onChange={change} min={min} max="999"/>
    </div>
  )
}

export default CustomNumberInput