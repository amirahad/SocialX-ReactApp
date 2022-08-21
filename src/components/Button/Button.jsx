import React from 'react'

function Button({text}) {
    const opengithub = (url) => {
        window.open(url, '_blank')
    }
  
  return (
    <a href className="cv-btn" onClick={() => opengithub("https://github.com/amirahad")}>{text}</a>
  )
}

export default Button
