import logo from './logo.svg';
import Header from './Header.js';
import Nav_menu from './Nav_menu.js';
import Slider from './Slider.js';
import Modal_login from './Modal_login';
import Modal_register from './Modal_register';
import Footer from './Footer.js';
import './assets/css/heading.css';
import './assets/css/base.css';
import './assets/css/modal.css';
import './assets/font/fontawesome-free-5.15.4-web/css/all.min.css';


function App() {
  return (
    <div>
      <Header/>
      <Nav_menu/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
