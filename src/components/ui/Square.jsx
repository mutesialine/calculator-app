import React from 'react'

const Square = ({element,styles,handleClick}) => {
  return (
    <div className={`py-10 px-4 text-4xl text-center font-bold cursor-pointer box-border border border-gray-100 bg-gray-200 ${styles}`} onClick={handleClick}>
      {element}
    </div>
  )
}

export default Square
