import React from 'react';
import NavLinks from './NavLinks';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import {useState} from 'react'; 

export default function MobileNav() {

    const [openMenu, setOpenMenu] = useState(false);

    const hamburgerIcon =  <GiHamburgerMenu className="hamburgerIcon"
                                size={40}
                                onClick={() => setOpenMenu(!openMenu)}
                            />

    const closeIcon =  <MdClose className="closeIcon" 
                            size={40}
                            onClick={() => setOpenMenu(!openMenu)}
                        />

    return (
        <nav className="mobileNav">
            {openMenu ? closeIcon : hamburgerIcon}
            {openMenu && <NavLinks />}
        </nav>
    );
}
