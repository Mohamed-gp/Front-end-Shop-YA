import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './component/Header'
import Details from './component/Details'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<Details />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
