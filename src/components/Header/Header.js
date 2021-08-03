import React, { useEffect, useState } from "react";
import Logo from "../../UI/Logo/Logo";

import { CgMenuRight, CgClose } from "react-icons/cg";
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const size = useWindowSize();

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size, menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen((p) => !p);
    };

    const menuToggle = !menuOpen ? (
        <CgMenuRight onClick={handleMenuToggle} />
    ) : (
        <CgClose onClick={handleMenuToggle} />
    );

    return (
        <header className={classes.header}>
            <Logo />
            <Nav />
            <div className={classes.header__menu}>
                <div className={classes.header__menu__toggle}>{menuToggle}</div>
                <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
                    <Nav isMenu menuToggle={handleMenuToggle} />
                </aside>
            </div>
        </header>
    );
};

export default Header;
