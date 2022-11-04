import React from "react";
import Lottie from 'react-lottie';
import animationData from '../images/linkedin.json';
import animationData2 from '../images/email.json';
import animationData3 from '../images/github.json';

export default function Footer() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="footer section" id="contact">
            <div className="content_card">
                <h2>Work together with me?</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/regina-zaripova/">
                            <Lottie 
                                options={defaultOptions}
                                height={80}
                                width={80}
                            />
                        </a>
                    </li>
                    <li><a href="mailto:regina.zaripova@gmail.com">
                            <Lottie 
                                options={defaultOptions2}
                                height={90}
                                width={90}
                            />regina.zaripova@gmail.com
                        </a>
                    </li>
                    <li><a href="https://github.com/anigerla">
                            <Lottie 
                                options={defaultOptions3}
                                height={90}
                                width={90}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}