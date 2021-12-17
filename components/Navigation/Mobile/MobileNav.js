import React from 'react';
import NavLinks from './NavLinks';
import {slide as Menu} from 'react-burger-menu';

export default function MobileNav() {

    return (
        <nav className="hamburgerMenu" id ="outer-container">
            <Menu right pageWrapId={ "page-wrap"} ourerContainerId={ "outer-container" }>
                <main id="page-wrap">
                    <NavLinks />
                </main>
           </Menu>
        </nav>
    );
}
