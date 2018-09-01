import React from 'react'
import Link from 'gatsby-link'
import './Menu.scss'
import Logo from '../../../Assets/logo.png'
import Search from '../../../Assets/saerch.png'


export default () => {
    return (
        <nav className="Menu">
            <div className="Logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <ul>
                <li><Link activeStyle={{ borderBottom: '6px solid #006cb6' }} exact to="/">Home</Link></li>
                <li><Link activeStyle={{ borderBottom: '6px solid #006cb6' }} exact to="/aboutUs">About us</Link></li>
                <li><Link activeStyle={{ borderBottom: '6px solid #006cb6' }} exact to="/services">Services</Link></li>
                <li><Link activeStyle={{ borderBottom: '6px solid #006cb6' }} exact to="/news">News</Link></li>
                <li><Link activeStyle={{ borderBottom: '6px solid #006cb6' }} exact to="/locations">Locations</Link></li>
                <li><Link activeStyle={{ borderBottom: '6px solid #006cb6' }} to="/contact">Kontakt</Link></li>
            </ul>
            <img src={Search} alt="Search"/>
        </nav>
  )
}
