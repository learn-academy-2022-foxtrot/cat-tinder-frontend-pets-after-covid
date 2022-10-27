import React from 'react'

const Card = (props) => {
  return (
    <div>
        <p>name {props.name}</p>
        <p>age {props.age}</p>
        <p>enjoys {props.enjoys}</p>
        <p>image {props.image}</p>
    </div>
  )
}

export default Card