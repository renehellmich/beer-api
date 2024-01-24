import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './allbeers.css'

function AllBeers() {

    const beerAPI = 'https://ih-beers-api2.herokuapp.com/beers'
    const [beerData, setBeerData] = useState(null)

    const fetchData = async (api) => {
        const resp = await axios.get(api)
        return resp.data
    }

    useEffect(() => {
        const fetchBeerData = async () => {
            const data = await fetchData(beerAPI)
            setBeerData(data)
            console.log(data);
        }
        fetchBeerData();
    },[])

    return (
        <>
            <div>AllBeers</div>
            {
                beerData ?
                (
                beerData.map((beer, index) => {

                    return (
                        <>
                        <div key={index} className='productCard'>
                            <img src={beer.image_url} alt="" className='productImg' />
                            <div className='productCardInnerDiv'>
                                <h2 className='h2BeerName'>{beer.name}</h2>
                                <h3 className='h3BeerTag'>{beer.tagline}</h3>
                                <p className='pContributed'>Created by: {beer.contributed_by.slice(0, beer.contributed_by.indexOf("<"))}</p>
                                <Link to={`/allbeers/${beer._id}`} className='linkButtonDetails'><button className='buttonDetails'></button>Detail</Link>
                            </div>
                        </div>
                        <hr className='sideStick'></hr>
                        </>
                    )
                })
                )
                : (
                    <p className='loadingPage'>Loading ...</p>
                )
            }
            <Nav />
        </>

    )
}

export default AllBeers