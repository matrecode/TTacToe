// import React, { useState } from 'react'

const Square = ({value, onSquareClick}) => {
    // const [value, setValue] = useState(null)

    // const handleClick = () => {
    //     setValue("X")
        
    // }

  return (
    <button onClick={onSquareClick}>
        {value}
    </button>
  )
}

export default Square