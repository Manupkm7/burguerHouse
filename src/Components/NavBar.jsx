import React,{useState} from 'react'
import {Link} from 'react-scroll'
import logo from '../img/logo1.png'
export const NavBar = () => {
const [nav, setNav] = useState(false)

const changeBackground = ()=>{
    if(window.scrollY >= 50){
        setNav(true)
    }else{
        setNav(false)
    }
}

window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
        <Link to='main' classNAme='logo' smooth={true} duration={2000}>
            <img src={logo} alt='Logo burguer' />
        </Link>
        <input type="checkbox"  className='menu-btn' id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' smooth={true} duration={2000}>Inicio</Link></li>
            <li><Link to='products' smooth={true} duration={2000}>Productos</Link></li>
            <li><Link to='about' smooth={true} duration={2000}>Sobre nosotros</Link></li>
            <li><Link to='contact' smooth={true} duration={2000}>Contacto</Link></li>
        </ul>
        </nav>
    )
}
