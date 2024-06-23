import React from 'react'
import SideBar from '../../components/admin/SideBar'
import AdminDonasi from '../../components/admin/AdminDonasii'



const AdminDonasiku = () => {
  return (
    <div className='flex bg-loginLight h-full'>
        <SideBar />
      <AdminDonasi />
    </div>
  )
}

export default AdminDonasiku