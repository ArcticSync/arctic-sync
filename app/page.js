"use client"

import React from 'react'
import './globals.css';
import Navbar from './header/Navbar'
import Landing from './landing/Landing'
import LandFooter from './footers/LandFooter'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <LandFooter />
    </div>
  )
}

export default Page