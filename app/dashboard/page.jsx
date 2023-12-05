"use client"
import React from 'react'
import Sidebar from './components/SideBar'
import Navbar from '../header/Navbar'
import Profile from './components/cards/Profile'
import CostOvertime from './components/cards/CostOvertime'
import Uptime from './components/cards/Uptime'
import StorageUsed from './components/cards/StorageUsed'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
          <Sidebar/>
          <div>
            <Profile/>
            <CostOvertime />
            <Uptime />
            <StorageUsed />
          </div>
        </div>
    </div>
  )
}

export default page

// #9cdd31
// #b7ed61
// #e8f5f0