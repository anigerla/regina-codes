import React from "react"
import react_logo from "../images/react_logo.png"
import splide_logo from "../images/splide_logo.png"
import firebase_logo from "../images/firebase_logo.png"
import html_logo from "../images/html_logo.webp"
import css_logo from "../images/css_logo.png"
import lottie_logo from "../images/lottie_logo.png"

export default function TechUsed() {
    // function floatImg() {
    //     const imgEls = document.getElementsByClassName('logo_img');
    //     for (const imgEl of imgEls) {
    //         let randomNum = Math.random()*100+29;
    //         if (randomNum > 35) {
    //             imgEl.style.height = `${randomNum}px`;
    //             imgEl.style.width = `${randomNum}px`;
    //         };

    //         imgEl.style.left = Math.random()*100 + '%'
    //     }
    // }

    // floatImg();
    return (
        <div className="content_card img_container">
            <div>
                <span>This site is built using:</span>
                <ul className="tech-used">
                    <li className="logo_img"><img src={react_logo} alt="React" /></li>
                    <li className="logo_img"><img src={splide_logo} alt="Splide slider" /></li>
                    <li className="logo_img"><img src={firebase_logo} alt="Splide slider" /></li>
                    <li className="logo_img"><img src={html_logo} alt="HTML" /></li>
                    <li className="logo_img"><img src={css_logo} alt="CSS" /></li>
                    <li className="logo_img"><img src={lottie_logo} alt="Lottie Animations" /></li>
                </ul>
            </div>
        </div>
    )
}