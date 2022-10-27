import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import airbnb from "../images/airbnb.gif";
import agnico from "../images/agnico.gif";
import caseys from "../images/caseys.gif";
import aris_gold from "../images/aris-gold.png";
import intrepid_potash from "../images/intrepid_potash.png";
import citius_pharma from "../images/citius-pharma.png";
import vintage_wines from "../images/vintage-wines.png";
import volta from "../images/volta.png";
import evgo from "../images/evgo.png";
import enviva from "../images/enviva.png";
import ltc_logo from "../images/logo.svg";
import invitation_homes from "../images/invitation_homes.png";
import licycle from "../images/licycle.png";

export default function Main() {
    return (
        <div class="main_content" id="top">
            <div class="gradient_background section">
                <div class="content_card">
                    <h2>Accessibility Work</h2>
                    <Splide aria-label="Accessibility showcase">
                    <SplideSlide>
                        <div class="splide-item">
                            <a href="https://investors.airbnb.com">
                                <h3>Airbnb</h3>
                            </a>
                            <img src={airbnb} alt=""/>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="splide-item">
                            <a href="https://www.agnicoeagle.com/French/accueil/default.aspx">
                                <h3>Agnico Eagle</h3>
                            </a>
                            <img src={agnico} alt=""/>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="splide-item">
                            <a href="https://investor.caseys.com/home/default.aspx">
                                <h3>Casey’s</h3>
                            </a>
                            <img src={caseys} alt=""/>
                        </div>
                    </SplideSlide>
                    </Splide>
                </div>
            </div>
            <div class="dark_background section">
                <h2>Site Builds at Q4 Inc.</h2>
                <div class="grid">
                    <div class="content flow">
                        <a href="https://www.arisgold.com/overview/default.aspx">
                            <h3 class="title">Aris Gold</h3>
                            <img src={aris_gold} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://investors.intrepidpotash.com/home/default.aspx">
                            <h3 class="title">Intrepid Potash</h3>
                            <img src={intrepid_potash} alt="" />
                        </a>
                    </div>
                    <div class="content flow featured">
                        <a href="https://citiuspharma.com/home/default.aspx">
                            <h3 class="title">Citius Pharma</h3>
                            <img src={citius_pharma} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://ir.vintagewineestates.com/overview/default.aspx">
                            <h3 class="title">Vintage Wine Estates</h3>
                            <img src={vintage_wines} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://investors.evgo.com/resources/investor-faqs/default.aspx">
                            <h3 class="title">EVgo</h3>
                            <img src={evgo} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://investors.voltacharging.com/overview/default.aspx">
                            <h3 class="title">Volta</h3>
                            <img src={volta} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://ir.envivabiomass.com/overview/default.aspx">
                            <h3 class="title">Enviva</h3>
                            <img src={enviva} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://ir.ltcreit.com/overview/default.aspx">
                            <h3 class="title">LTC Properties</h3>
                            <img src={ltc_logo} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://www.invh.com/home/default.aspx">
                            <h3 class="title">Invitation Homes</h3>
                            <img src={invitation_homes} alt="" />
                        </a>
                    </div>
                    <div class="content flow">
                        <a href="https://investors.li-cycle.com/overview/default.aspx">
                            <h3 class="title">Li-Cycle</h3>
                            <img src={licycle} alt="" />
                        </a>
                    </div>
                    <div class="welle"></div>
                </div>
            </div>
            <div class="autotrader section">
                <div class="content_card">
                    <h2>Site Builds at AutoTrader</h2>
                    <div class="portfolio">
                        <div class="clip_card"></div>
                        <div class="text">
                            <p>Example sites that I built at AutoTrader</p>
                            <ul>
                                <li>
                                    <a href="https://www.bmwtoronto.ca">BMW dealership</a>
                                </li>
                                <li>
                                    <a href="https://fordgabriel.com">Ford Dealership</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_card">
                <h2>Freelance Work</h2>
                <ul class="portfolio">
                    <li>
                        <a href="https://bec-evb.c">Bio-Sphere Eco-City Initiative</a>
                    </li>
                    <li>
                        <a href="https://www.springfling2023.ca/toronto/">RSCDS Toronto</a>
                    </li>
                    <li>
                        <a href="http://anchor-hr.com/">Anchor HR</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}