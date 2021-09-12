import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
      <div className='header__logo'>
        <img src={logo} alt="logo"/>
        <span className='header__logo-name'>Лагидзе</span>
      </div>
  );
};

export default Logo;