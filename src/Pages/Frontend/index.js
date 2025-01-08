import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from '../../components/Footer/index'
import NavHeader from '../../components/navHeader/navHeader'
const Frontend = () => {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Frontend