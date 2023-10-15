import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoardPage = () => {
  return (
    <section>
        <Outlet/>
    </section>
  )
}

export default DashBoardPage