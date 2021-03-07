import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setCategoryWoman, setCategoryMan} from '../redux/actions'

function NavBar() {
    const dispatch = useDispatch();
    const locale = useSelector(state => state.locale.lang);
    const cartLength = useSelector(state => state.cart.length);
    const wishLength = useSelector(state => state.wish.length);
    const [search, setSearch] = React.useState('');
    const [mobMenu, setMobMenu] = React.useState(false);
    const activeFirst = React.useRef(null);
    const overflow = React.useRef(null);

    React.useEffect(() => {
        activeFirst.current.click();
      }, []);                        
    
    function searchChange(e) {
        setSearch(e.target.value); 
    }

    function onMobClick(e) {
        e.preventDefault();
        setMobMenu(!mobMenu);
        overflow.current.classList.contains('active') ?
        overflow.current.classList.remove('active') :
        overflow.current.classList.add('active');
        document.body.classList.contains('fixed') ?
        document.body.classList.remove('fixed') :
        document.body.classList.add('fixed');
    }

    let cart_number, wish_number;
    if (cartLength > 0) {
        cart_number = <div className="nav_cart_number">{cartLength}</div>
    }
    if (wishLength > 0) {
        wish_number = <div className="nav_wish_number">{wishLength}</div>
    }

    
    return (
        <header>
            <div className="overflow" ref={overflow} onClick={onMobClick}></div>
            <nav>
                <span>
                    <Link to="/" className="nav-brand">Fashion</Link>
                </span>
                <form className="search_form">
                    <svg viewBox="0 0 446.25 446.25">
                        <g><g id="search">
                            <path d="M318.75,280.5h-20.4l-7.649-7.65c25.5-28.05,40.8-66.3,40.8-107.1C331.5,73.95,257.55,0,165.75,0S0,73.95,0,165.75
                            S73.95,331.5,165.75,331.5c40.8,0,79.05-15.3,107.1-40.8l7.65,7.649v20.4L408,446.25L446.25,408L318.75,280.5z M165.75,280.5
                            C102,280.5,51,229.5,51,165.75S102,51,165.75,51S280.5,102,280.5,165.75S229.5,280.5,165.75,280.5z"/>
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                    <input className="search_input" 
                        type="text"
                        name="search"
                        value={search}
                        onChange={searchChange}
                        placeholder={locale === 'en' ? "Search" : "Поиск"} />
                    <input className="search_submit" type="submit" value="Отправить" />
                </form>
                <ul className={mobMenu ? 'mobile_menu' : 'nav-ul'}>
                    {mobMenu && <li className="close_menu" onClick={onMobClick}>
                        <svg viewBox="0 0 492 492">
                            <g><g>
                                <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
                                    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
                                    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                                    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                                    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                                    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                                    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
                            </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>
                    </li>}
                    <li onClick={() => dispatch(setCategoryWoman())}>
                        <NavLink to="/woman" ref={activeFirst}>
                            {locale === 'en' ? 'WOMAN' : 'ЖЕНЩИНЫ'}
                        </NavLink>
                    </li>
                    <li onClick={() => dispatch(setCategoryMan())}>
                        <NavLink to="/man">
                            {locale === 'en' ? 'MAN' : 'МУЖЧИНЫ'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/designer">
                            {locale === 'en' ? 'DESIGNERS' : 'ДИЗАЙНЕРЫ'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/wish-list" className="nav_wish">
                            {locale === 'en' ? 'WISHLIST' : 'ИЗБРАННОЕ'}
                            {wish_number}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="nav_cart">
                            {locale === 'en' ? 'CART' : 'КОРЗИНА'}
                            <svg viewBox="0 0 510 510">
                                <g><g>
                                <path d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
                                c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
                                c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
                                c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"/>
                                    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                </svg>
                            {cart_number}
                        </NavLink>
                    </li>
                </ul>
                <span className="nav_mobile_button" onClick={onMobClick}>
                    <svg viewBox="0 0 124 124">
                        <g>
                            <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
                            <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
                            <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </span>
            </nav>
        </header>
    );
}

export default NavBar;
