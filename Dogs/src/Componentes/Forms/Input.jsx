import React from 'react'
import '...../'

const Input = ({label,name,id,type,onChange}) => {
  return (
    <div>
        <label htmlFor={name}></label>
      <input id={id} type={type} label={label} onChange={onChange} />
    </div>
  )
}

export default Input
