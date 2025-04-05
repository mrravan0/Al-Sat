import './_header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleBurgerClick = () => setIsActive(!isActive);
    return (
        <header className='header'>
            <div className="header__inner container">
                <div className='header__wrapper'>
                    <div className={`header__overlay ${isActive ? 'is-active' : ''}`}>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__list-item"><Link to="/">Əsas Səhifə</Link></li>
                                <li className="header__list-item"><Link to="/blog">Blog</Link></li>
                                <li className="header__list-item"><Link to="/contact">Əlaqə</Link></li>
                            </ul>
                        </nav>
                        <Link to={"/login"} className="button" >Giriş</Link>
                    </div>
                    <button className={`header__burger-button visible-mobile ${isActive ? 'is-active' : ''}`} onClick={handleBurgerClick}>
                        <span className='header__line'></span>
                        <span className='header__line'></span>
                        <span className='header__line'></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;