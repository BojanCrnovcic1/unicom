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
        
        // Sticky logika
        setIsSticky(currentScrollY > 100);

        // Show/Hide logika na skrol
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsVisible(false); // Skrol dole - sakrij
        } else {
            setIsVisible(true);  // Skrol gore - prikaži
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
            
            {/* TopHeader - sakriva se u sticky modu */}
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
                            {/* Navigacija */}
                            <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
                                <NavLink to="/solutions" onClick={closeMenu}>Solutions</NavLink>
                                <NavLink to="/platform" onClick={closeMenu}>Platform</NavLink>
                                <NavLink to="/industries" onClick={closeMenu}>Industries</NavLink>
                                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                            </nav>

                            {/* Hamburger / Close dugme */}
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

            {/* Overlay za zatvaranje na klik van menija */}
            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        </header>
    )
}

export default Header;