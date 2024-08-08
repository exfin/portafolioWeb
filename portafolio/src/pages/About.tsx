import  { Component } from 'react';
import { Navbar } from '../components/Navbar';
import './styles/About.css'
import { Footer } from '../components/Footer';
import profileimage from '../assets/profile.png';

class About extends Component {


    
    render() {
        
        return (
            <div className='about-page'>
                <Navbar></Navbar>
                <div className='about-body'>
                    <div className='about-content'>
                        <h1>About Me</h1>
                        <p>
                            I am a student who is currently in the fifth semester of Systems engineering at EIA University
                        </p>
                    </div>
                    <div className='about-image'>
                        <img src={profileimage} alt='Profile' />


                    </div>
                </div>
                <Footer></Footer>
            </div>

        
        );
    }
}

export default About;