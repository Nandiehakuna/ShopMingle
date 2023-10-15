import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const MainLayout = () => {
  return (
    <section>
        {/* <Header/> */}
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default MainLayout