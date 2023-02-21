import React from 'react'

const Button = ({nextQuest, index}) => {
  return (
    <div>
      <button className="text bg-blue-700 rounded px-8 py-1" onClick={nextQuest}>Next</button>
    </div>
  )
}

export default Button
