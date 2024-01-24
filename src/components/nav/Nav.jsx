import React from 'react'
import { Link } from 'react-router-dom'
import navPic from '../../assets/bier_1.png'
import './nav.css'

function Nav() {
    return (
        <nav className='navBar'>
            <Link to='/'>
                <img src={navPic} alt="" id='imgNav'/>
            </Link>
        </nav>
    )
}

export default Nav