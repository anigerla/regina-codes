import React from "react"

// styling incorporated from this Figma source: https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal?node-id=0%3A1
export default function TravelCard(props) {
    return (
        <div className="card_container">
            <img src={props.img} />
            <div className="card_info">
                <div className="location_div">
                    <span>{props.country}</span>
                    <a className="google_maps" href={props.mapsUrl} target="_blank" aria-label="Opens in a new tab">View on Google Maps</a>
                </div>
                <span>Length of time: {props.timeSpent}</span>
                <p>{props.country_summary}</p>
            </div>
            <hr
                style={{
                background: 'lime',
                color: 'lime',
                borderColor: 'lime',
                height: '3px',
                }}
            />
        </div>
    )
}