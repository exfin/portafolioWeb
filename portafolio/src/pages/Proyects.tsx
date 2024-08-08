import  { Component } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import './styles/Projects.css'
import { FaBusAlt } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

class Proyects extends Component {
    render() {
        return (
            <div className='projects-page'>
                <Navbar></Navbar>
                <div className='projects-container'>
                    <div className='project-info1'>
                        <div className='info-image1'></div>
                        <div className='info-text'>
                            
                           <div className='info1'>
                                <IoFastFood className='icon1'/>

                                <div>
                                    This project was made for 'Requisitos y Modelos subject', and it consists  of a web page with User
                                    authentication and a menu system with a shopping cart where you can order the foods avalaible in a 
                                    MongoDB database, the Backend is made with express nodemon and the frontend is in react
                                </div>
                           </div>
                        </div>
                        
                    </div>
                    <div className='project-info2'>
                        <div className='info-text'>
                            <div className='info2'>
                                <FaBusAlt className='icon2'/>
                                <div>This project was made for 'Proyecto II' subject, and it consists of a web page that has:
                                    User authentication using tokens with an express backend server, and a React frontEnd that uses
                                    the google maps api to show the coordinates sent by a microcontroller with a marker on the map
                                </div>
                                <a href="https://buses-eia.netlify.app/login" target="_blank" rel="noopener noreferrer">
                                    <button className='btn2'>View Project</button>
                                </a>
                                
                            </div>
                            
                        </div>
                        <div className='info-image2'></div>
                    </div>
                    
                </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default Proyects;