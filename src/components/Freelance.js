import React from "react"

export default function Freelance() {
    return (
        <div className="content_card freelance">
            <h2>Freelance Work</h2>
            <div>
                <article className="environmental">
                    <div className="circle">
                    </div>
                    <div>
                        <h4>Environmental</h4>
                        <p>I am really passionate about environmental issues and I love to contribute by providing my expertise to various sustaianbility-minded organizations. (This section will be growing in the future!)</p>
                        <ul className="portfolio">
                            <li>
                                <a href="https://bec-evb.ca">Bio-Sphere Eco-City Initiative</a>
                            </li>
                            <li>
                                <a href="http://www.cleantechnorth.org/">Clean-Tech North</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div>
                        <h4>Other Freelance & Contract Work</h4>
                        <p>Examples of websites that I have completed as side projects.</p>
                        <ul className="portfolio">
                            <li>
                                <a href="https://www.springfling2023.ca/toronto/">RSCDS Toronto</a>
                            </li>
                            <li>
                                <a href="http://anchor-hr.com/">Anchor HR</a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    )
}