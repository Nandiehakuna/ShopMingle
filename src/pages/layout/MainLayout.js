import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const MainLayout = () => {
  return (
    <section>
        <Header/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default MainLayout