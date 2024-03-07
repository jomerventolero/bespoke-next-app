"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

const Jobs = () => {
  return (
    <main className="flex flex-col gap-4 justify-center overflow-hidden w-full h-[80%]">
      <motion.div className={`flex justify-center py-52 bg-officebg bg-cover`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 2.5,
                delay: 0.5
            }}
        >
          <button onClick={() => {<Link href='https://odoo.mybespokestaff.com/jobs'/>}} className="font-poppins text-center font-semibold text-3xl text-brandBlue p-5 rounded-full shadow-2xl bg-white hover:bg-brandBlue hover:text-white transition-colors ease-in-out duration-300">Go to Jobs Page 🏢</button>
        </motion.div>
    </main>
  )
}

export default Jobs