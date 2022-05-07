import React from 'react'
import { useState, useEffect, useRef} from 'react';
import './assets/css/heading.css';
import './assets/css/base.css';
import './assets/font/fontawesome-free-5.15.4-web/css/all.min.css'

function Nav_menu() {

    const featured = ['New Releases', 'SNKRS Launch Calendar', 'Member Access', 'Sustainable Materials', 'Air Force 1', 'Football Club Kits', 'Top Picks Under 2,300,000 đ', 'Sale']
    const shoes = ['Neweast Sneakers', 'All Shoes', 'Lifestyle', 'Running', 'Basketball', 'Jordan', 'Football', 'Gym and Training', 'Skateboarding', 'Tennis',
                    'Sandals and Sides', 'Customise with Nike By You', 'All Sale Shoes']
    const clothing = ['All Clothing', 'Tops and T-Shrits', 'Jersey and Kits', 'Hoodies and Gilets', 'Pants and Leggings','Tracksuits', 'Compression and Base Layer',
                        'Shorts', 'Caps', 'Socks', 'Bags and Backpacks', 'Accessories and Equipment', 'All Sale Cloting']
    const shop_By_Sport = ['Runnging', 'Football', 'Basketball', 'Gym and Traning', 'Yoga', 'Skateboarding', 'Tennis', 'Golf']
    const shop_By_Brand = ['Nike Sportwear', 'NikeLab', 'Nike By You', 'Jordan', 'ACG', 'NBA', 'Nike SB']
    const icon = ['Air Force 1', 'Pegasus', 'Blazer', 'Air Jordan 1', 'Air Max']

  return (
    <nav>
        <div className="grid">
            <div className="header-nav">
                <span className="header__logo">Anh Pham</span>
                <ul className="header-nav__list">
                    <li className="header-nav__list-item">
                        <a href="" className="header-nav__list-item-subnav">Men</a>
                        <div className="header-nav__sub-header">
                            <div className="grid-1000 subheader-nav__lists">
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Featured</h3>
                                    {featured.map((featured) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{featured}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shoes</h3>
                                    {shoes.map((shoes) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{shoes}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Clothing</h3>
                                    {clothing.map((clothing) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{clothing}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shop By Sport</h3>
                                    {shop_By_Sport.map((shop_By_Sport) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Sport}</a></li>
                                    ))}

                                    <ul className="subheader-nav__list subheader-list--small">
                                        <h3 className="sub-header__title">Shop By Brand</h3>
                                        {shop_By_Brand.map((shop_By_Brand) => (
                                            <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Brand}</a></li>
                                        ))}
                                    </ul>
                                </ul>
                                <ul className="grid-5  subheader-nav__list">
                                    <h3 className="sub-header__title">Icon</h3>
                                    {icon.map((icon) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{icon}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="header-nav__list-item">
                        <a href="" className="header-nav__list-item-subnav">Women</a>
                        <div className="header-nav__sub-header">
                        <div className="grid-1000 subheader-nav__lists">
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Featured</h3>
                                    {featured.map((featured) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{featured}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shoes</h3>
                                    {shoes.map((shoes) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{shoes}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Clothing</h3>
                                    {clothing.map((clothing) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{clothing}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shop By Sport</h3>
                                    {shop_By_Sport.map((shop_By_Sport) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Sport}</a></li>
                                    ))}

                                    <ul className="subheader-nav__list subheader-list--small">
                                        <h3 className="sub-header__title">Shop By Brand</h3>
                                        {shop_By_Brand.map((shop_By_Brand) => (
                                            <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Brand}</a></li>
                                        ))}
                                    </ul>
                                </ul>
                                <ul className="grid-5  subheader-nav__list">
                                    <h3 className="sub-header__title">Icon</h3>
                                    {icon.map((icon) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{icon}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="header-nav__list-item">
                        <a href="" className="header-nav__list-item-subnav">Kids</a>
                        <div className="header-nav__sub-header">
                        <div className="grid-1000 subheader-nav__lists">
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Featured</h3>
                                    {featured.map((featured) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{featured}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shoes</h3>
                                    {shoes.map((shoes) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{shoes}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Clothing</h3>
                                    {clothing.map((clothing) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{clothing}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shop By Sport</h3>
                                    {shop_By_Sport.map((shop_By_Sport) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Sport}</a></li>
                                    ))}

                                    <ul className="subheader-nav__list subheader-list--small">
                                        <h3 className="sub-header__title">Shop By Brand</h3>
                                        {shop_By_Brand.map((shop_By_Brand) => (
                                            <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Brand}</a></li>
                                        ))}
                                    </ul>
                                </ul>
                                <ul className="grid-5  subheader-nav__list">
                                    <h3 className="sub-header__title">Icon</h3>
                                    {icon.map((icon) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{icon}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="header-nav__list-item">
                        <a href="" className="header-nav__list-item-subnav">Customise</a>
                        <div className="header-nav__sub-header">
                        <div className="grid-1000 subheader-nav__lists">
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Featured</h3>
                                    {featured.map((featured) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{featured}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shoes</h3>
                                    {shoes.map((shoes) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{shoes}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Clothing</h3>
                                    {clothing.map((clothing) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{clothing}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shop By Sport</h3>
                                    {shop_By_Sport.map((shop_By_Sport) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Sport}</a></li>
                                    ))}

                                    <ul className="subheader-nav__list subheader-list--small">
                                        <h3 className="sub-header__title">Shop By Brand</h3>
                                        {shop_By_Brand.map((shop_By_Brand) => (
                                            <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Brand}</a></li>
                                        ))}
                                    </ul>
                                </ul>
                                <ul className="grid-5  subheader-nav__list">
                                    <h3 className="sub-header__title">Icon</h3>
                                    {icon.map((icon) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{icon}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="header-nav__list-item">
                        <a href="" className="header-nav__list-item-subnav">Sale</a>
                        <div className="header-nav__sub-header">
                        <div className="grid-1000 subheader-nav__lists">
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Featured</h3>
                                    {featured.map((featured) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{featured}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shoes</h3>
                                    {shoes.map((shoes) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{shoes}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Clothing</h3>
                                    {clothing.map((clothing) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{clothing}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shop By Sport</h3>
                                    {shop_By_Sport.map((shop_By_Sport) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Sport}</a></li>
                                    ))}

                                    <ul className="subheader-nav__list subheader-list--small">
                                        <h3 className="sub-header__title">Shop By Brand</h3>
                                        {shop_By_Brand.map((shop_By_Brand) => (
                                            <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Brand}</a></li>
                                        ))}
                                    </ul>
                                </ul>
                                <ul className="grid-5  subheader-nav__list">
                                    <h3 className="sub-header__title">Icon</h3>
                                    {icon.map((icon) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{icon}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="header-nav__list-item">
                        <a href="" className="header-nav__list-item-subnav">SNKRS</a>
                        <div className="header-nav__sub-header">
                        <div className="grid-1000 subheader-nav__lists">
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Featured</h3>
                                    {featured.map((featured) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{featured}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shoes</h3>
                                    {shoes.map((shoes) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{shoes}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Clothing</h3>
                                    {clothing.map((clothing) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{clothing}</a></li>
                                    ))}
                                </ul>
                                <ul className="grid-5 subheader-nav__list">
                                    <h3 className="sub-header__title">Shop By Sport</h3>
                                    {shop_By_Sport.map((shop_By_Sport) => (
                                        <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Sport}</a></li>
                                    ))}

                                    <ul className="subheader-nav__list subheader-list--small">
                                        <h3 className="sub-header__title">Shop By Brand</h3>
                                        {shop_By_Brand.map((shop_By_Brand) => (
                                            <li className="subheader-nav__list-item"> <a href="" className="item">{shop_By_Brand}</a></li>
                                        ))}
                                    </ul>
                                </ul>
                                <ul className="grid-5  subheader-nav__list">
                                    <h3 className="sub-header__title">Icon</h3>
                                    {icon.map((icon) => (
                                         <li className="subheader-nav__list-item"> <a href="" className="item">{icon}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="header-nav__tools">
                    
                    <input type="text" name="" id="" placeholder="Search" className="header-nav__tools-search"/>
                    <i className="logo-icon logo-icon-tools far fa-heart"></i>
                    <i className="logo-icon logo-icon-tools fas fa-shopping-bag"></i>
                </div>
            </div>
        </div>
    </nav>
  );
}
export default Nav_menu;
