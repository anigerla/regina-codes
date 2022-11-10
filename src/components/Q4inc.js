import React from "react"

export default function Q4inc(props) {
    return (
        <div className="content flow">
            <a href={props.url}>
                <h3 className="title">{props.title}</h3>
                <img src={`../../images/${props.img}`} alt="" />
            </a>
        </div>
    )
}