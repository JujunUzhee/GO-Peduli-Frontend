import React from 'react'
import SideBar from '../../components/admin/SideBar'
import DashboardComponent from '../../components/admin/DashboardComponent'



const AdminDashboard = () => {
  return (
    <div className='flex  bg-loginLight h-full'>
        <SideBar />
        <DashboardComponent />
    </div>
  )
}

export default AdminDashboard