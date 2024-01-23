import React from 'react'
import MainContainer from '../../components/mainContainer/MainContainer'
import AllBeers from '../allBeers/AllBeers'

function Home() {
    const stringLorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ullam consectetur temporibus eius. Ratione veniam vel nobis, blanditiis consequatur alias.'

    return (
        <>
            <MainContainer
                data={'../src/assets/CoverAllBeers.png'}
                link={'/allbeers'}
                linkTo={'All Beers'}
                string={stringLorem}
            />
            <MainContainer
                data={'../src/assets/CoverRandomBeer.png'}
                link={'/randombeer'}
                linkTo={'Random Beers'}
                string={stringLorem}
            />
        </>
    )
}

export default Home