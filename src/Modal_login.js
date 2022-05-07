import React, { useState, useEffect, useRef } from "react";
import './assets/css/modal.css';
import './assets/css/base.css';
import Modal_register from './Modal_register';
import './assets/font/fontawesome-free-5.15.4-web/css/all.min.css'

function Modal_login({closeLogin}){
  const [modal, setModal] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); 
  }, [])

    return (
      <>
            <div className="modal js-modal">
              <div className="modal-container js-container">
                  <div className="modal-close js-close" onClick = {() => closeLogin(false)}>X</div>
                  <header className="modal-header">
                      <span className="modal__logo"><i className="icon-logo fab fa-artstation"></i></span><br/>
                      <p className="icon-bag ti-bag">Your accout for <br/> Anh Pham Shop</p>
                  </header>
        
                  <div className="modal-body">
                      <input type="text" className="modal-input" placeholder="Email address" ref = {inputRef}/>
                      <input type="password" className="modal-input" placeholder="Password"/>
                      <a href="" className="modal-forgot__password">Forgot your password ?</a>
                      <button href="" className="pay-tickets">Sign In <i className="ti-check"></i></button>
                      <p className="modal-register">Not a member? <a href="" className="modal-link-form">Join Us</a></p>
                  </div>
              </div>
          </div>
      </>
    );
}

export default Modal_login;

