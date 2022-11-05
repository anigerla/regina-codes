import React from "react"

export default function Navbar() {
    return (
        <div className="nav-container">
        <nav className="menu">
            <div className="logo">
                <a href="#top">Regina's Portfolio</a>
            </div>
            <ul className="navbar">
                <li><a href="#top">Home</a></li>
                {/* <li><a href="#">About</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    )
}