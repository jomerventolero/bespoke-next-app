"use client";
import React from 'react'
import UnStyledButton from '@/components/UnStyledButton'
import Card from '@/components/Card'
import MobileCard from '@/components/MobileCard'
import Image from 'next/image'

import { motion } from 'framer-motion'


const Testimonials = () => {
  return (
    <section id="security" className='sm:py-20 px-2 md:px-10 lg:px-40 z-40 bg-white snap-proximity'>
        <motion.div className="flex flex-row justify-center w-full h-full bg-gradient-to-b from-indigo-300 to-cyan-200 rounded-xl shadow-2xl drop-shadow-2xl snap-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <motion.div 
                initial={{ opacity: 0,  }}
                whileInView={{ opacity: 1  }}
                transition={{
                    type: "fadeIn",
                    delay: 0.8,
                    duration: 1.0,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                viewport={{ once: true }}
                className="flex flex-col sm:pt-12 px-2 py-4 self-center md:pl-5 sm:pb-5">
                <h1 className="font-poppins font-bold text-blue-600 text-2xl px-2 sm:pb-5">Data Security</h1>
                <span className={`sm:my-10 my-4 text-md md:text-xl mx-2 font-poppins font-medium text-justify place-self-center align-middle text-brandBlack self-center`}>
                    With the constant advancements in technology, you can be sure the data we process for you is secured in our in-house dedicated server under lock and key with 24 hours surveillance monitoring.
                    Our stringent measures that we have set in stone on all our Bespoke staff are implemented to the highest standard to prevent any data leak as we fully understand these sensitive data are proprietary to our customers only.
                </span>
                <UnStyledButton text="Find out more" buttonStyle="bg-brandBlack text-white text-md sm:text-xl rounded-full py-4 px-4 transition-all ease-in-out duration-300 hover:bg-brandBlue font-poppins" redirect="datasecurity" />
            </motion.div>
            <div className='flex items-center justify-center w-full'>
                <Image src="/assets/datasecurity.png" alt="securityicon" className='lg:block hidden h-full w-full' width={512} height={512}/>
            </div>
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center px-10 py-2 "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 1.5,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            viewport={{ once: true }}
        >
            <h1 className={`font-poppins text-center font-bold pb-4 pt-8 text-brandBlue text-2xl`}>
                HOW YOUR BESPOKE STAFF CAN HELP WITH YOUR BUSINESS
            </h1>
            <div className="hidden sm:flex flex-row overflow-hidden bg-slate-200 rounded-[55px] w-[95%] h-[50%] shadow-2xl drop-shadow-2xl">
                <Card  image1="/assets/Icons/kangarooaustralia.png"  text="Australian reps at your beck and call"/>
                <Card  image1="/assets/Icons/scale0.png" text="Scale faster with efficiency"/>
                <Card  image1="/assets/Icons/cost0.png" text="Reduce staffing cost"/>
                <Card  image1="/assets/Icons/leverage0.png" text="Leverage your productivity to focus on what you need to the most"/>
                <Card  image1="/assets/Icons/talent0.png" text="Widen Talent search"/>
            </div>
            <div className="flex flex-col gap-6 pt-4 sm:hidden">
                <div className="flex flex-row gap-6">
                    <MobileCard image1="/assets/Icons/kangarooaustralia.png" text="Australian reps at your beck and call" />
                    <MobileCard image1="/assets/Icons/scale0.png" text="Scale faster with efficiency" />
                </div>
                <div className="flex flex-row gap-6">
                    <MobileCard image1="/assets/Icons/cost0.png" text="Reduce staffing cost" />
                    <MobileCard image1="/assets/Icons/leverage0.png" text="Leverage your productivity to focus on what you need to the most" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <MobileCard image1="/assets/Icons/talent0.png" text="Widen Talent search" />
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Testimonials