import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/travel" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}