import React from 'react';
import logo from './IMAGES/image1.png';
import './figma.css';
import banner from './IMAGES/bannerimage.png';

const NavBar = () => {
  return (
    <div className='navBar'>
        <nav className='nav'>
            <ul className='listItems'>
                <li><a>LOG IN</a></li>
                <li><a>RESERVATION</a></li>
                <li><a>PRIVATE PARTIES</a></li>
                <li><a><img src={logo}/></a></li>
                <li><a>EVENTS</a></li>
                <li><a>CONTACT US</a></li>
                <li><a>ABOUT US</a></li>
            </ul>
        </nav>
        <section className='bannerSection'>
          <div className='bannerPosition'>
          <div className='bannerHead'>
              <h1>DESSART BAR KITCHEN</h1>
              <p>The Barn is a global food experience and our dessert bar is legendary!</p>
          </div>
          <div>
            <button className='btnContact'>Contact Us</button>
          </div>
          </div>
        </section>
    </div>
  )
}

export default NavBar