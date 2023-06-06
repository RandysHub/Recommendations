import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div>
    {props.image &&(
      <img src={props.cover} alt="" />
    )}
    </div>
  )
}

export default Card
