import React from 'react'
import Logo from '../header/Logo'
import Navigation from './Navigation'
import Phone from '../../assets/Phone.svg'

function Header({ refs }) {
  return (
    <header className="header">
      <Logo />
      <Navigation refs={refs} />
      <div className="header__phone-wrapper">
        <svg
          width="10"
          height="23"
          viewBox="0 0 10 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5423 16.4605L4.82276 14.7164C4.00029 12.4697 3.88087 10.6726 4.63263 8.76168L7.22796 6.88965L8.44336 3.98071L6.34739 1.9908C5.71732 1.39262 4.73271 1.43607 4.24235 2.14102C3.0182 3.9009 1.06538 7.34501 1.19063 11.2681C1.32217 15.3879 3.51903 19.2071 4.86046 21.1696C5.37845 21.9276 6.43215 21.9739 7.05702 21.3158L8.93599 19.3366L7.5423 16.4605Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a className="header__phone-number">+7 (981) 809-14-93 </a>
      </div>
    </header>
  )
}

export default Header
