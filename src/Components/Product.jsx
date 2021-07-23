import React from 'react'
import {ProductBox} from './ProductBox'
import pimage1 from '../img/s1.png'
import pimage2 from '../img/s2.png'



export const Product = () => {
    return (
        <div id='products'>
            <h1>Elige & Disfruta</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, reprehenderit sit.</p>
            <div className='a-container'>
                <ProductBox image={pimage1} title='Hamburguesa Lurguer'/> 
                <ProductBox image={pimage2} title='Hamburguesa Pingeon'/> 
                <ProductBox image={pimage1} title='Hamburguesa Lurguer'/> 
            </div>
        </div>
    )
}
