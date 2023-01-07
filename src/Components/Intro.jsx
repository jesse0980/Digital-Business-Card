import React from "react"

export default function Intro () {
    return (
        <div className="Intro">
            <img src="src\Components\headshot.jpg"/>
            
            <h4>Jesse Landis</h4>
            <h5>Software Engineer</h5>
            <h6>jesse-landis.com</h6>
            <a href="mailto:cooljesseguy2@gmail.com" target="_blank"><button className="Email"><img src="src\Components\Icon.jpg"/><h7>Email</h7></button></a>
            <a href="https://www.linkedin.com/in/jesse-landis-b9aa4818a/" target="_blank"><button className="Linkedin" ><img src="src\Components\linkedin.png"/><h7>Linkedin</h7></button></a>
        </div>
    )
}