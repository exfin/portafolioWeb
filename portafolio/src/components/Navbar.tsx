
import { Link, NavLink } from "react-router-dom";
import './styles/Navbar.css'

import { useState } from "react";

export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false)

    return(
                <nav> 
                    <Link to="/" className='titulos'>Portfolio</Link>
                    <div className="menu" onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>                 
                    <ul className={menuOpen ? "open" : ""}>
                        <li>

                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/hobbies">Hobbies</NavLink>
                        </li>
                    </ul> 
                </nav>
    );
}