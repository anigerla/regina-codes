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
            <div className="intro">
                <p>I have lived, studied and worked in many countries.</p>
                <span>*This is just another opportunity to showcase my coding skills. ;)</span><br></br>
                <span className="mockup_source">I used a publicly available mock-up </span>  
                <a className="mockup_link" href="https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal?node-id=0%3A1" 
                target="_blank" aria-label="opens in a new window">here</a>
            </div>
            <div className="card_parent content_card">
                {travel_cards}
           </div>
        </div>
    );
}