import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import axios from 'axios'

function RandomBeer() {
    const beerAPI = 'https://ih-beers-api2.herokuapp.com/beers/random'
    const [beerData, setBeerData] = useState(null)

    useEffect(() => {
        const fetchBeerData = async () => {
            const resp = await axios.get(beerAPI)
            setBeerData(resp.data)
            console.log(resp.data);
        }
        fetchBeerData();
    }, [])
    return (
        <>
            <section className='detailData'>
                {
                    beerData ?
                        (
                            <>
                                <div className='imgDetailContainer'>
                                    <img src={beerData.image_url} alt="" className='imgDetail' />
                                </div>
                                <h2>{beerData.name}</h2>
                                <h3>{beerData.tagline}</h3>
                                <div className='pDetails'>
                                    <p>First brewed:</p>
                                    <p>{beerData.first_brewed}</p>
                                </div>
                                <div className='pDetails'>
                                    <p>Attenuation level:</p>
                                    <p>{beerData.attenuation_level}</p>
                                </div>
                                <p>{beerData.description}</p>
                                <Link to={'/allbeers'}><img src='../../src/assets/Back.png' alt="" className='imgBack' /></Link>
                            </>)
                        : (
                            <p className='loadingPage'> loading .... </p>
                        )
                }
            </section>
            <Nav />
        </>
    )
}

export default RandomBeer