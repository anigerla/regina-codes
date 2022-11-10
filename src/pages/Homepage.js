import React from "react"
import TechUsed from "../components/TechUsed"
import Accessibility from "../components/Accessibility"
import Q4inc from "../components/Q4inc"
import Autotrader from "../components/Autotrader"
import Freelance from "../components/Freelance"
import data from "../data.js"

export default function Homepage() {
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
            <TechUsed />
            <Accessibility />
            <div className="gradient_background q4inc">
                <div className="section">
                    <div className="grid">
                    <h2>Site Builds at Q4 Inc.</h2>
                        {cards}
                    </div>
                </div>
            </div>
            <Autotrader />
            <Freelance />
        </div>
    );
}