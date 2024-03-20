import React from 'react'
import './Header.scss';
import logo from '../../assets/SSPS.png'

function Header() {
  return (
    <>
    <div className="parent-div">
      <section className="left-section">
        <img className='logo' src={logo} alt="Sunshine School" />
      </section>
      <section className="right-section">
        <span className="first-line">MADARSA</span>
        <span className="second-line">SUNSHINE ISLAMIC SCHOOL</span>
        <span className="third-line">AN ENGLISH MEDIUM CO-EDUCATONAL SCHOOL WITH URDU, QURAN AND DEENIYAT</span>
        <span className="fourth-line">NAHAL, GHAZIABAD</span>
        <span className="fifth-line">ADMISSION FORM</span>
      </section>
    </div>
    </>
  )
}

export default Header