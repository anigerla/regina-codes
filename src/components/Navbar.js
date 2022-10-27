import React from "react"

export default function Navbar() {
    return (
        <div class="nav-container">
        <nav class="menu">
            <div class="logo">
                <a href="">Regina's Portfolio</a>
            </div>
            <ul class="navbar">
                <li><a href="#top">Home</a></li>
                {/* <li><a href="#">About</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    )
}