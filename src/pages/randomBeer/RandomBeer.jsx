import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import axios from 'axios'

function RandomBeer() {
    const beerAPI = 'https://ih-beers-api2.herokuapp.com/beers/random'
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
            <Nav />
        </>
    )
}

export default RandomBeer