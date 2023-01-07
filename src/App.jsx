import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import React from "react"
import Intro from "./Components/Intro.jsx"
import About from "./Components/About.jsx"
import Interests from "./Components/interests.jsx"
import Footer from "./Components/Footer.jsx"


export default function App () {
    return(
        <div>
            <Intro/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}