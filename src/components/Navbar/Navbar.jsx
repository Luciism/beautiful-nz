import { useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from "../../DataContext";
import { Icon } from '@iconify/react';

import "./Navbar.css";
import "./HamburgerMenu.css";

const Navlink = ({ name, url }) => {
    return (
        <li><Link to={url}>{name}</Link></li>
    );
}

const NavlinkDropdown = ({name, links}) => {
    const navlinkDropdown = useRef();

    const handleNavlinkDropdownTextClick = () => {
        navlinkDropdown.current.classList.toggle("active");
    }

    return (
        <li className="navlink-dropdown" ref={navlinkDropdown}>
            <a className="navlink-dropdown-text" onClick={handleNavlinkDropdownTextClick}>
                <span>{name}</span>
                <Icon icon="mingcute:down-line" className="icon" />
            </a>
            <div className="navlink-sublinks">
                <ul>{links.map(link => link)}</ul>
            </div>    
        </li>
    );
}

const LanguageSelector = () => {
    const { lang, setLang } = useContext(DataContext);
    const otherLang = lang == "en" ? "reo" : "en";

    const handleLanguageSelectorClick = () => {
        localStorage.setItem("lang", otherLang);
        setLang(otherLang);
        // window.location.reload();
    }

    return (
        <div
            className="gradient-outline language-selector-wrapper"
            onClick={handleLanguageSelectorClick}
        >
            <button className="language-selector">
                <span className="text-gradient-down">
                    {otherLang.toUpperCase()}
                </span>
            </button>
        </div>
    );
}

const Navbar = () => {
    const lang = useContext(DataContext).lang;
    
    const hamburgerMenuRef = useRef();
    const navlinksRef = useRef();
    const navbarRef = useRef();

    const handleHamburgerMenuClick = () => {
        hamburgerMenuRef.current.classList.toggle("active");
        navlinksRef.current.classList.toggle("open");
    }

    // close navlinks sidebar when anywhere but navbar is clicked

    const handleWindowClick = (e) => {
        if (
            !navbarRef.current.contains(e.target)
            && navlinksRef.current.classList.contains("open")
        ) {
            handleHamburgerMenuClick();
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleWindowClick);
        
        return () => {
            window.removeEventListener("click", handleWindowClick);
        }
    });


    return (
        <nav className="navbar" ref={navbarRef}>
            <Link to="/">
                <img className="logo-img" src="/logo.svg" alt="Logo that leads to homepage" />
            </Link>
            <div className="navigation">
                <ul className="navlinks" ref={navlinksRef}>
                    <NavlinkDropdown name={lang == "en" ? "EXPLORE" : "HŌPARA"} links={[
                        <Navlink name={lang == "en" ? "BEACHES" : "TĀTAHI"} url="/explore/beaches" key="1" />,
                        <Navlink name={lang == "en" ? "BUSHES" : "PŪRANGI"} url="/explore/bushes" key="2" />,
                        <Navlink name={lang == "en" ? "MOUNTAINS" : "NGA MAUNGA"} url="/explore/mountains" key="3" />
                    ]} />
                    <Navlink name={lang == "en" ? "LANDMARKS" : "WHĀINGA AROARO"} url="" />
                    <Navlink name={lang == "en" ? "CULTURE" : "WHAKAARO"} url="" />
                    <Navlink name={lang == "en" ? "TOURISM" : "TŪRISMA"} url="" />
                </ul>
                <LanguageSelector />
                <div
                    className="hamburger-menu-icon"
                    ref={hamburgerMenuRef}
                    onClick={handleHamburgerMenuClick}
                >
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;