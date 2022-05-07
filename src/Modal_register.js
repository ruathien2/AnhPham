import './assets/css/modal.css';
import {useRef, useEffect} from 'react'
import './assets/css/base.css';
import Modal_login from './Modal_login';
import './assets/font/fontawesome-free-5.15.4-web/css/all.min.css'


export default function Modal_register({closeRegister}){

        const inputRef = useRef()

        useEffect(() => {
            inputRef.current.focus();
        }, [])

       return (
            <div className="modal js-modal">
                <div className="modal-container__register js-container">
                    <div className="modal-close js-close" onClick={() => closeRegister(false)}>X</div>
                    <header className="modal-header">
                        <span className="modal__logo"><i className="icon-logo fab fa-artstation"></i></span><br/>
                        <p className="icon-bag ti-bag">Become A Anh Pham <br/> Shop Member</p>
                    </header>
            
                    <div className="modal-body">
                        <input type="email" className="modal-input" placeholder="Email address" title="Email Address" ref = {inputRef}/>
                        <input type="password" className="modal-input" placeholder="Password" title="Password"/>
                        <input type="text" className="modal-input" placeholder="First Name" title="First Name"/>
                        <input type="text" className="modal-input" placeholder="Last Name" title="Last Name"/>
                        <input type="month" className="modal-input" placeholder="day of birth" title="Day of Birth"/>
                        <input type="text" className="modal-input" placeholder="Male or Female" title="Gender"/>
                        <button href="" className="pay-tickets">Join Us<i className="ti-check"></i></button>
                        <p className="modal-register">Already a member? <a href="" className="modal-register-form" onClick={() => <Modal_login/>}>Sign In</a></p>
                    </div>
                </div>
            </div>
       )
}
