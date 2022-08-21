import React from 'react'
import Button from '../Button/Button'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    
  return (
    <div id='main'>
      <Navbar />
      <div className="name">
        <h1>
            It's a <span>ReactJS</span> website
        </h1>
        <p className="details">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="header-btns">
          <Button text="Hire Me" />

          <Button text='GitHub' />
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  )
}
