import React from 'react'
import { useState } from 'react'

function CheckBoxWithLabel({title, value, change}) {










  return (
    <div className='checkWithLabel' key={title}>
        <input type="checkbox" id={value} name={title} value={value} onChange={change} />
  <label htmlFor={value}>{title}</label>
    </div>
  )
}

export default CheckBoxWithLabel