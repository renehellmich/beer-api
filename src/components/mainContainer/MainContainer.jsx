import React from 'react'
import { Link } from 'react-router-dom'

function MainContainer({data, string, link, linkTo}) {
  return (
    <>
        <section className='scMainPage'>
            <img src={data} alt="" />
            <div>
                <Link to={link}>{linkTo}</Link>
            </div>
            <p>{string}</p>
        </section>
    </>
  )
}

export default MainContainer