import {useState, useEffect} from 'react'
import './assets/css/heading.css';
import './assets/css/base.css';
import './assets/font/fontawesome-free-5.15.4-web/css/all.min.css';
import banner from './assets/img/silder/banner.jpg';
import sport from './assets/img/silder/fashion-football.jpg';
import gym from './assets/img/silder/Asset 1.png';

function Slider() {

    const [goToTop, setGoToTop] = useState(false)

    useEffect (() => {
       const handleGoToTop = () => {
           if(window.scrollY >= 200){
               setGoToTop(true);
           }else{
               setGoToTop(false);
           }
       }

        window.addEventListener('scroll', handleGoToTop)

        return () => {
            window.removeEventListener('scroll', handleGoToTop)
        }
    })

  return (
    <div className="slider">
         <div className="slider-title">
            <img src={banner} alt="" className="slider-img slider-position"/>
            <div className="slider-name">
                <h1 className="name-shop">Fashion Anh Pham</h1>
                <p className="description-name">Welcome to Fashion Anh Pham, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vel. Sapiente reiciendis aliquid, distinctio ad mollitia cumque provident et atque aliquam quae eos, porro, ullam corporis ea? Nemo, sapiente
                    recusandae?</p>
                <a href="" className="button-shop">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> Click here</a>
            </div>
        </div>
        <div className="slider-content">
            <div className="slider-description">
                <p className="description-content">Sportswear</p>
                <h4 className="description-title">Turn up the sport</h4>
                <p className="description-content">Find a tracksuit that's highly supportive, so you don't have to hold back your abilities</p>
                <a href="" className="button-href">Shop</a>
            </div>
            <div className="grid">
                <h4 className="slider-featured">Featured</h4>
                <img src={sport} alt="" className="slider-img"/>
            </div>
        </div>
        <div className="slider-content">
            <div className="slider-description">
                <h4 className="description-title">Fashion Anh Pham on the rise</h4>
                <p className="description-content">Find a tracksuit that's highly supportive, so you don't have to hold back your abilities</p>
                <a href="" className="button-href">Shop</a>
            </div>
            <div className="grid">
                <h4 className="slider-featured">Featured</h4>
                <img src={gym} alt="" className="slider-img"/>
            </div>
        </div>
        {goToTop && (
            <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                    background: 'red',
                    border: 'none',
                    padding: 10,
                    borderRadius: 40,
                    color: '#fff', 
                    cursor: 'pointer',
                    zIndex: 1
                }}
                onClick = {() => setGoToTop(window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                }))}
            >Top</button>
        )}
        
    </div>
  )
}
export default Slider;
