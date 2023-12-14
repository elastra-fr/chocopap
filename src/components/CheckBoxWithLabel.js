import React from 'react'

function CheckBoxWithLabel({title, value, isChecked}) {
  return (
    <div className='checkWithLabel'>
        <input type="checkbox" id={title} name={title} value={value}/>
  <label htmlFor={title}>{title}</label>
    </div>
  )
}

export default CheckBoxWithLabel