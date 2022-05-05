import React from 'react';
import './assets/css/heading.css';
import './assets/css/base.css';
import './assets/font/fontawesome-free-5.15.4-web/css/all.min.css';
import banner from './assets/img/silder/banner.jpg';
import sport from './assets/img/silder/fashion-football.jpg';
import gym from './assets/img/silder/Asset 1.png';

function Slider() {
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

        
    </div>
  )
}
export default Slider;
