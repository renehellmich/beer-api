import React from 'react'
import { Link } from 'react-router-dom'
import './maincontainer.css'

function MainContainer({data, string, link, linkTo}) {
  return (
    <>
        <section className='scMainPage'>
            <img src={data} alt="" className='imgMainPage'/>
            <div className='linkMainPage'>
                <Link to={link} className='LinkTo'><p className='pLinkTo'>{linkTo}</p></Link>
            </div>
            <p className='mainPageDescription'>{string}</p>
        </section>
    </>
  )
}

export default MainContainer