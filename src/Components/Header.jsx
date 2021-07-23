import React from 'react'

export const Header = () => {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h3>Siempre es buen momento para comer una hamburguesa!</h3>
                <h1><span>HAMBURGUESA</span><br/>DE LA SEMANA</h1>
                <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='header-btns'>
                    <a href='main' className='header-btn'>Pedila</a>
                </div>
            </div>
        </div>
    )
}
