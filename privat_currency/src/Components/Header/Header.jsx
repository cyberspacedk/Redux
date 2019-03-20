import React from 'react';
import logo from './dimaPrivat.png';

const Header = () => {
  return (
    <header className="page-header">
    {/* logo */}
      <img className="header-logo" src={logo} alt="PrivaBank Logo"/>
      <h1 className="header-title">Курсы валют PrivatBank</h1>
    </header>
  )
}

export default Header
