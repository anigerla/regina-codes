import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="nav-container">
        <nav className="menu">
            <div className="logo">
                <a href="#top">Regina's Portfolio</a>
            </div>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/travel">Travel</Link></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    )
}