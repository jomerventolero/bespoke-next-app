"use client"
import React from 'react'
import MeteorCard from '../MeteorCard'

import { FaPeopleGroup } from 'react-icons/fa6'

const MyStaffButtons = () => {

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const children = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (
    <div className="hidden sm:flex flex-col gap-16 justify-around px-20 py-72 items-center h-screen bg-white z-40 bg-grid-black/5">
        <div className='flex flex-row gap-4'>
            <h1 className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-500">My Bespoke Staff</h1>
            <FaPeopleGroup className="text-brandBlue self-center" size="4rem"/>
        </div>
        <div className="flex flex-row justify-around gap-8"  >
            <MeteorCard title="My Bespoke Staff Marketing" image="/assets/Icons/marketing.png" url="/web/contactus" durationP={0.5} delayP={0.2}/>
            <MeteorCard title="My Bespoke Staff Accounting" image="/assets/Icons/accounting.png" url="/web/contactus" durationP={0.5} delayP={0.4}/>
            <MeteorCard title="My Bespoke Staff Customer Support" image="/assets/Icons/customersupport.png" url="/web/contactus" durationP={0.5} delayP={0.6}/>
        </div>
        <div className="flex flex-row justify-around gap-8"  >
            <MeteorCard title="My Bespoke Staff Data Entry" image="/assets/Icons/dataentry.png" url="/web/contactus" durationP={0.5} delayP={0.8}/>
            <MeteorCard title="My Bespoke Staff Front/Back Office" image="/assets/Icons/frontbackoffice.png" url="/web/contactus" durationP={0.5} delayP={1}/>
            <MeteorCard title="My Bespoke Staff IT Support" image="/assets/Icons/it-4.png" url="/web/contactus" durationP={0.5} delayP={1.2}/>
        </div>
    </div>
  )
}

export default MyStaffButtons