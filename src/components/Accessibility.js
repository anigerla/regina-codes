import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import airbnb from "../images/airbnb.gif";
import agnico from "../images/agnico.gif";
import caseys from "../images/caseys.gif";

export default function Accessibility() {
    return (
        <div className="gradient_background section accessibility">
            <div className="content_card">
                <h2>Accessibility Work</h2>
                <Splide aria-label="Accessibility showcase">
                <SplideSlide>
                    <div className="splide-item">
                        <a href="https://investors.airbnb.com">
                            <h3>Airbnb</h3>
                        </a>
                        <img src={airbnb} alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="splide-item">
                        <a href="https://www.agnicoeagle.com/French/accueil/default.aspx">
                            <h3>Agnico Eagle</h3>
                        </a>
                        <img src={agnico} alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="splide-item">
                        <a href="https://investor.caseys.com/home/default.aspx">
                            <h3>Casey’s</h3>
                        </a>
                        <img src={caseys} alt=""/>
                    </div>
                </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}