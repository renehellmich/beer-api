import React from 'react'
import { Link } from 'react-router-dom'
import navPic from '../../assets/bier_1.png'

function Nav() {
    return (
        <nav className='navBar'>
            <Link to='/'>
                <img src={navPic} alt="" />
            </Link>
        </nav>
    )
}

export default Nav