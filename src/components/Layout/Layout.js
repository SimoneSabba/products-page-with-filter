import React from 'react';

// Components
import Header from '../Header/Header';

// Style
import './Layout.scss';

const Layout = (props) => (
    <div className="Layout">
        <Header />
        <main>
        { props.children }
        </main>
    </div>
);

export default Layout;