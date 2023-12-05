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
          <div className="flex mt-12">
            {/* Left column with Profile, Uptime, and StorageUsed components */}
            <div className="flex flex-col">
              <Profile />
              <div className='mt-2 mb-2'>
              <Uptime />
              </div>
              <StorageUsed />
            </div>

            {/* Right column with CostOvertime component */}
            <div className="ml-4">
              <CostOvertime />
            </div>
          </div>
        </div>
    </div>
  )
}

export default page

// #9cdd31
// #b7ed61
// #e8f5f0