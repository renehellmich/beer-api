import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import AllBeers from './pages/allBeers/AllBeers'
import DetailPage from './pages/detailPage/DetailPage'
import RandomBeer from './pages/randomBeer/RandomBeer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/allbeers' element={<AllBeers />}/>
        <Route path='/allbeers/:beerId' element={<DetailPage />}/>
        <Route path='/randombeer' element={<RandomBeer />}/>
      </Routes>
    </>
  )
}

export default App
