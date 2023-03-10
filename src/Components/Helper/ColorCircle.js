import React from 'react'

const ColorCircle = ({ color }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.50" fill={`#${color}`} stroke="#707070" strokeWidth="0.5"/>
    </svg>
  )
}

export default ColorCircle