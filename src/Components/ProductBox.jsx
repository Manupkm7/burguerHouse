import React from 'react'

export const ProductBox = (props) => {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
            <img src={props.image} alt="img" />
            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <button className='productbox-button'>Pedila Ya</button>
            </div>
        </div>
    )
}
