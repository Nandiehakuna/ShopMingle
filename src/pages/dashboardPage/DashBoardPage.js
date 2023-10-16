import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavigation from '../../components/dashboardNavigation/DashboardNavigation'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardActivities from '../../components/dashboardActivities/DashboardActivities'

const DashBoardPage = () => {
  return (
    <section>
        <DashboardNavigation/>
        <DashboardHeader/>
        <DashboardActivities/>
        <Outlet/>
    </section>
  )
}

export default DashBoardPage