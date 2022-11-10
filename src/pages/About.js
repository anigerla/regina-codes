import React from "react"
import TravelCard from "../components/TraveCard.js"
import data from "../travel_data.js"

export default function About() {
    const travel_cards = data.map(item => {
        return (
            <TravelCard
                key = {item.id}
                {...item}
            />
        )
    })

    return (
        <div className="travel_page">
            <div>
                <p>I have lived, studied and worked in many countries.</p>
                <span>*This is just another opportunity to showcase my coding skills. ;)</span><br></br>
                <span>I used a publicly available mock-up</span>
            </div>
            <div className="card_parent">
                {travel_cards}
           </div>
        </div>
    );
}