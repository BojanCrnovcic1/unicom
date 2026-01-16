import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import TopHeaderOne from "./TopHeaderOne"
import '../../styles/headers/header.scss'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        const currentScrollY = window.scrollY;
        
        setIsSticky(currentScrollY > 100);

        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsVisible(false); 
        } else {
            setIsVisible(true); 
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlHeader);
        return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`main-header-wrapper ${isVisible ? 'header-visible' : 'header-hidden'} ${isSticky ? 'is-sticky' : ''}`}>
            
            {!isSticky && <TopHeaderOne />} 
            
            <div className="header-main-area">
                <div className="custom-container">
                    <div className="header-main-inner">
                        
                        <div className="header-logo">
                            <Link to="/" onClick={closeMenu}>
                                <img src="/assets/logoH2.jpg" alt="logo" />
                            </Link>
                        </div>

                        <div className="header-navigation-area">
                            <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
                                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                                <NavLink to="/platform" onClick={closeMenu}>Platform</NavLink>
                                <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
                                <NavLink to="/catalogs" onClick={closeMenu}>Catalogs</NavLink>
                                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                            </nav>

                            <button 
                                className={`mobile-menu-trigger ${isMenuOpen ? 'active' : ''}`}
                                onClick={toggleMenu}
                                aria-label="Toggle navigation menu"
                            >
                                <span></span><span></span><span></span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        </header>
    )
}

export default Header;