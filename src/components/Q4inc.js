import React from "react";
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

export default function Q4inc() {
    return (
        <div className="gradient_background q4inc">
            <div className="section">
                <h2>Site Builds at Q4 Inc.</h2>
                <div className="grid">
                    <div className="content flow">
                        <a href="https://www.arisgold.com/overview/default.aspx">
                            <h3 className="title">Aris Gold</h3>
                            <img src={aris_gold} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://investors.intrepidpotash.com/home/default.aspx">
                            <h3 className="title">Intrepid Potash</h3>
                            <img src={intrepid_potash} alt="" />
                        </a>
                    </div>
                    <div className="content flow featured">
                        <a href="https://citiuspharma.com/home/default.aspx">
                            <h3 className="title">Citius Pharma</h3>
                            <img src={citius_pharma} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://ir.vintagewineestates.com/overview/default.aspx">
                            <h3 className="title">Vintage Wine Estates</h3>
                            <img src={vintage_wines} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://investors.evgo.com/resources/investor-faqs/default.aspx">
                            <h3 className="title">EVgo</h3>
                            <img src={evgo} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://investors.voltacharging.com/overview/default.aspx">
                            <h3 className="title">Volta</h3>
                            <img src={volta} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://ir.envivabiomass.com/overview/default.aspx">
                            <h3 className="title">Enviva</h3>
                            <img src={enviva} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://ir.ltcreit.com/overview/default.aspx">
                            <h3 className="title">LTC Properties</h3>
                            <img src={ltc_logo} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://www.invh.com/home/default.aspx">
                            <h3 className="title">Invitation Homes</h3>
                            <img src={invitation_homes} alt="" />
                        </a>
                    </div>
                    <div className="content flow">
                        <a href="https://investors.li-cycle.com/overview/default.aspx">
                            <h3 className="title">Li-Cycle</h3>
                            <img src={licycle} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}