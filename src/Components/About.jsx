import React from 'react'
import aboutImage from '../img/about.png'

export const About = () => {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>EVENTO PRONTO!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut dignissimos magnam, pariatur facere velit?</p>
                <button>Leer más</button>
            </div>
            <div className="about-image">
            <img src={aboutImage} alt="about" />
            </div>
        </div>
    )
}
