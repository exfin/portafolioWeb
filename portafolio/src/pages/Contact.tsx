import React, { Component } from 'react';
import { Navbar } from '../components/Navbar';
import { FaPhoneSquare } from "react-icons/fa";
import { Footer } from '../components/Footer';
import { FaGithub } from "react-icons/fa6";
import { SiMicrosoftoutlook } from "react-icons/si";
import './styles/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='contact-page'>
               <Navbar></Navbar>
               <div className='contact-links'>
                    
                    
                        <div className='contact-container1'>
                            <SiMicrosoftoutlook className='icon'></SiMicrosoftoutlook>
                            <p className='contact-info'>juan.lopez79@eia.edu.co</p>
                        </div>
                        <div className='contact-container2'>
                            <FaGithub className='icon'></FaGithub>
                            <a href="https://github.com/exfin" className='contact-info' target="_blank" rel="noopener noreferrer">
                                exfin</a>
                        </div>
                        <div className='contact-container3'>
                            <FaPhoneSquare className='icon'></FaPhoneSquare>
                            <p className='contact-info'>3113833402</p>
                        
                        </div>
               </div>
               <Footer></Footer>
                
            </div>
        );
    }
}

export default Contact;