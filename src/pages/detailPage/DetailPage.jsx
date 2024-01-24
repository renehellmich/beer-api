import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import './detailpage.css'

function DetailPage() {
    const dataId = useParams();
    console.log("ID: UseParams", dataId.beerId);

    const beerAPI = `https://ih-beers-api2.herokuapp.com/beers/${dataId.beerId}`
    const [beerData, setBeerData] = useState(null)

    // const fetchData = async (api) => {
    //     const resp = await axios.get(api)
    //     return resp.data
    // }

    useEffect(() => {
        const fetchBeerData = async () => {
            const resp = await axios.get(beerAPI)
            setBeerData(resp.data)
            console.log(resp.data);
        }
        fetchBeerData();
    }, [])

    // const data = beerData[Number(dataId.beerId)]
    // console.log(data);
    return (
        <>
            <section className='detailData'>
                {
                    beerData ?
                        (
                            <section className='scDetail'>
                                <div className='imgDetailContainer'>
                                    <img src={beerData.image_url} alt="" className='imgDetail' />
                                </div>
                                <h2 className='h2DetailPage'>{beerData.name}</h2>
                                <h3 className='h3DetailPage'>{beerData.tagline}</h3>
                                <div>
                                    <div className='divDetails'>
                                        <p className='pDetails'>First brewed:</p>
                                        <p className='pDetails'>{beerData.first_brewed}</p>
                                    </div>
                                    <div className='divDetails'>
                                        <p className='pDetails'>Attenuation level:</p>
                                        <p className='pDetails'>{beerData.attenuation_level}</p>
                                    </div>
                                </div>
                                <p className='pDetailsDescription'>{beerData.description}</p>
                                <Link to={'/allbeers'}><img src='../../src/assets/Back.png' alt="" className='imgBack' /></Link>
                            </section>)
                        : (
                            <p className='loadingPage'> loading .... </p>
                        )
                }
            </section>
            <Nav />
        </>
    )
}

export default DetailPage