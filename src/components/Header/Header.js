import React from 'react';

// Style
import './Header.scss';

// Assets
import logo from '../../logo.svg';

const Header = () => (
<header className="header">
    <span>Products list page</span>
    <img className="header__logo" src={logo} alt="logo" />
</header>
);

export default Header;