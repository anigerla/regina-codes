import React from "react";
import Accessibility from "./Accessibility";
import Q4inc from './Q4inc';
import Autotrader from "./Autotrader";
import Freelance from "./Freelance";
import data from "../data.js";

export default function Main() {
    const cards = data.map(item => {
        return (
            <Q4inc
                key = {item.id}
                {...item}
            />
        )
    })

    return (
        <div className="main_content" id="top">
            <Accessibility />
            <div className="gradient_background q4inc">
                <div className="section">
                    <h2>Site Builds at Q4 Inc.</h2>
                    <div className="grid">
                        {cards}
                    </div>
                </div>
            </div>
            <Autotrader />
            <Freelance />
        </div>
    );
}