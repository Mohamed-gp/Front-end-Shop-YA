import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './component/Header'
import Details from './component/Details'
import Footer from './component/Footer'
import Shop from './component/Shop'
import Electronics from './pages/Electronics'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          //home
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<Details />} />
          <Route path='shop/:id' element={<Shop/>} />
          //electronics product
          <Route path='electronics' element={<Electronics/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App


