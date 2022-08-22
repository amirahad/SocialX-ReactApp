import React from 'react'
import SIngleService from './SIngleService'
import image1 from '../../images/s1.png'
import image2 from '../../images/s2.png'

export default function Services() {
  return (
      <div id="services">
        <div className="s-heading">
            <h1>Services</h1>
            <p>Here are some services I Provide</p>
        </div>
        <div className="b-container">
            <SIngleService image={image1} alt={image1} button="ReactJs"/>
            <SIngleService image={image2} alt={image2} button="Node Js"/>
            <SIngleService image={image1} alt={image1} button="Express Js"/>
        </div>
      </div>
  )
}
