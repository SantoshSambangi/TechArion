import React from 'react';
import logo from './IMAGES/image1.png';
import './figma.css';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';



const Footer = () => {
  return (
    <div className='footer'>
        <center className='alignContent'>
            <div className='footerLogo'>
                <img  src={logo}/>
            </div>

            <div className='footerContent'>
                <h3>Dessert.Bar.Kitchen</h3>
                <p>+040 2355 7261</p>
                <p>savory@qodeinteractive.com</p>
                <p>Plot No.8-2, 293/82/A/161, Rd Number 13, Jubilee Hills, Hyderabad, Telangana 500033</p>
            </div>

            <div className='footerIcons'>
                <AiFillFacebook size={40}/>&nbsp;&nbsp;
                <AiOutlineInstagram size={40}/>&nbsp;&nbsp;
                <AiFillYoutube size={40}/>
            </div>

            <hr className='line'/>

            <div className='footerCopyRight'> 
                <p><a><AiOutlineCopyrightCircle/>TECHARION 2023</a></p>
            </div>
        </center>
    </div>
  )
}

export default Footer;