import React from 'react'

function CheckBoxWithLabel({title, value, change}) {

let checkedValue = "";

if(value === 'all'){
    
  checkedValue = "checked";

  
  }

  else{
    checkedValue = "";  
  }


  return (
    <div className='checkWithLabel' key={title}>
        <input type="checkbox" id={value} name={title} value={value} onChange={change} checkedValue={checkedValue}/>
  <label htmlFor={value}>{title}</label>
    </div>
  )
}

export default CheckBoxWithLabel