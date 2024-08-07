import React, { Component } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import './styles/Hobbies.css'
import imageHobby2 from '../assets/FB_IMG_1574452787045.jpg';
import imageHobby3 from '../assets/08c70d922582aee28252dae1a1041109.jpg'

class Hobbies extends Component {
    render() {
        return (
            <div className='hobbies-page'>
                <Navbar></Navbar>
                <div className='hobbies-container'>
                    <div className='hobby'>
                        <h2>Hobby 1</h2>
                        <img className='image1'src='https://i.pinimg.com/736x/b3/6b/7c/b36b7c9c4ad5e3d20e302d6216623091.jpg' 
                        alt='Hobby 1 Image' title='Videogames'/>
                    </div>
                    <div className='hobby'>
                        <h2>Hobby 2</h2>
                        <img className='image2' src={imageHobby2} alt='Hobby 2 Image' title='Swimming'/>
                    </div>
                    <div className='hobby'>
                        <h2>Hobby 3</h2>
                        <img className='image3' src={imageHobby3} alt='Hobby 3 Image' title='Metting with friends'/>
                    </div>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default Hobbies;