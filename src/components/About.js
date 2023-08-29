import React from "react";

function About({imageSrc = "https://via.placeholder.com/215Links ",text}){
    
    return (
        <aside>
            <img src = {imageSrc} alt="blog logo"></img>
            <p>{text}</p>
        </aside>
    )
}

export default About;