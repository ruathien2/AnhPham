import React from 'react';
import {useState} from 'react'
import './assets/css/heading.css';
import './assets/css/base.css';
import './assets/font/fontawesome-free-5.15.4-web/css/all.min.css'
import Modal_register from './Modal_register';
import Modal_login from './Modal_login';

function Header() {

    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

  return (
    <header>
        <div className="grid">
            <div className="header">
                <span className="header__logo"><i className="icon-logo fab fa-artstation"></i></span>
                <ul className="header__list">
                    <li className="header__list-item  header__list-item-subnav">
                        <a href="#" className="header__list-item-nav">Help</a>
                        <ul className="sub-header__list">
                            <h3 className="sub-header__title">Help</h3>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">OrderStatus</a></li>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">Dispatch and Delivery</a></li>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">Returns</a></li>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">Contact Us</a></li>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">Privacy Policy</a></li>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">Terms of Sale</a></li>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">Terms of Use</a></li>
                            <li className="sub-header__list-item"><a href="#" className="sub-header__list-subitem">Send Us Feedback</a></li>
                        </ul>
                    </li>
                    <li className="header__list-item"><a href="#" className="header__list-item-nav" onClick={() => setShowRegister(!showRegister)}>Join Us</a></li>
                    {showRegister && <Modal_register closeRegister={setShowRegister}/>}
                    <li className="header__list-item"><a href="#" className="header__list-item-nav" onClick = {() => setShowLogin(!showLogin)}>Sign In</a></li>
                    {showLogin && <Modal_login closeLogin={setShowLogin}/>}
                </ul>
            </div>
        </div>
    </header>
  );
}

export default Header;
