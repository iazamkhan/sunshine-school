import React from 'react'
import './Header.scss';
import logo from '../../assets/SSPS.png'

function Header() {
  return (
    <div className="parent-div">
      <section className="left-section">
        <img className='logo' src={logo} alt="Sunshine School" />
      </section>
      <section className="right-section">
        <span className="first-line">MADARSA</span>
      </section>
    </div>
  )
}

export default Header