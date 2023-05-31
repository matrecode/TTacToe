// import React, { useState } from 'react'

const Square = ({value, onSquareClick}) => {
    // const [value, setValue] = useState(null)

    // const handleClick = () => {
    //     setValue("X")
        
    // }

  return (
    <button onClick={onSquareClick}>
        <h2>{value}</h2>
    </button>
  )
}

export default Square