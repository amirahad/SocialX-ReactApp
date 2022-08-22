import React from 'react'

function Button({text,github}) {
    
  
  return (
    <a href className="cv-btn" onClick={github}>{text}</a>
  )
}

export default Button
