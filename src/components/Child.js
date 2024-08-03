import React from 'react'

const Child = (props) => {
  return (
    <div style={{backgroundColor:props.background}}><h2>{props.text}</h2>
    <button onClick={()=>{props.handleClick(props.id)}}>{props.option}</button></div>
  )
}

export default Child