import React from "react";
import Accessibility from "./Accessibility";
import Q4inc from './Q4inc';
import Autotrader from "./Autotrader";
import Freelance from "./Freelance"

export default function Main() {
    return (
        <div className="main_content" id="top">
            <Accessibility />
            <Q4inc />
            <Autotrader />
            <Freelance />
        </div>
    )
}