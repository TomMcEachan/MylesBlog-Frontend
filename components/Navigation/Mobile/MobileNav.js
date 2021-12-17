import React from 'react';
import NavLinks from './NavLinks';
import {slide as Menu} from 'react-burger-menu';

export default function MobileNav() {

    return (
        <nav>
            <Menu right>
                <NavLinks />
           </Menu>
        </nav>
    );
}
