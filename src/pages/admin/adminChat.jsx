import React from 'react'
import SideBar from '../../components/admin/SideBar'
import ChatComponent from '../../components/admin/ChatComponent'



const AdminChat = () => {
  return (
    <div className='flex  bg-loginLight h-full'>
      <SideBar />
      <ChatComponent />
    </div>
  )
}

export default AdminChat