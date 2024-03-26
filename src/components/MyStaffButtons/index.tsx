"use client"
import React, { useRef } from 'react'
import MeteorCard from '../MeteorCard'

import { FaPeopleGroup } from 'react-icons/fa6'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const MyStaffButtons = () => {

  const ref = useRef(null)

  useGSAP(() => {
    gsap.from("#myStaffButtons", {
      y: -100,
      duration: 2,
      opacity: 0,
      ease: 'fade',
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#myStaffButtons",
        start: "top 70%",
        end: "bottom 70%",
      }
    })
  }, [])


  return (
    <div ref={ref} className="hidden sm:flex flex-col gap-16 justify-around px-20 py-5 items-center h-screen bg-white z-40">
        <div className='flex flex-row gap-4'>
            <h1 className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-500">My Bespoke Staff</h1>
            <FaPeopleGroup className="text-brandBlue self-center" size="4rem"/>
        </div>
        <div className="flex flex-row justify-around gap-8"  >
            <MeteorCard id="myStaffButtons" title="My Bespoke Staff Marketing" image="/assets/Icons/marketing.png" url="/web/contactus"/>
            <MeteorCard id="myStaffButtons" title="My Bespoke Staff Accounting" image="/assets/Icons/accounting.png" url="/web/contactus"/>
            <MeteorCard id="myStaffButtons" title="My Bespoke Staff Customer Support" image="/assets/Icons/customersupport.png" url="/web/contactus" />
        </div>
        <div className="flex flex-row justify-around gap-8"  >
            <MeteorCard id="myStaffButtons" title="My Bespoke Staff Data Entry" image="/assets/Icons/dataentry.png" url="/web/contactus"/>
            <MeteorCard id="myStaffButtons" title="My Bespoke Staff Front/Back Office" image="/assets/Icons/frontbackoffice.png" url="/web/contactus"/>
            <MeteorCard id="myStaffButtons" title="My Bespoke Staff IT Support" image="/assets/Icons/it-4.png" url="/web/contactus"/>
        </div>
    </div>
  )
}

export default MyStaffButtons