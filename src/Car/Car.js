import React from 'react'

export default (props) => (
    <div>
      <h3 style={{color: '#01796F'}}>Сar name: {props.name}</h3>
      <p style={{color: '#4169E1'}}>Year: <strong>{props.year}</strong></p>
      <button onClick={props.onChangeTitle}>Click</button>
    </div>
  )