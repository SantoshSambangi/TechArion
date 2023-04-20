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
                <h3><a href='#'>Dessert.Bar.Kitchen</a></h3>
                <p><a href='#'>+040 2355 7261</a></p>
                <p><a href='#'>savory@qodeinteractive.com</a></p>
                <p><a href='#'>Plot No.8-2, 293/82/A/161, Rd Number 13, Jubilee Hills, Hyderabad, Telangana 500033</a></p>
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