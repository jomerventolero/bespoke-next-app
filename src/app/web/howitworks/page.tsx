"use client"
import UnStyledButton from '@/components/UnStyledButton'
import { motion } from 'framer-motion'
import Image from 'next/image'


const HowitWorks = () => {
  return (
    <div id="howitworks">
        <motion.div className="sm:flex flex-row hidden justify-between bg-gradient-to-t from-blue-200 to-blue-400 mt-20 mx-40 text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            duration: 3.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
            }}  
            >
              <span className="self-center w-1/2 px-8">
                Outsource to the Philippines and create a dedicated team, without the worry about Office Space, IT, Recruitment, Payroll, and more.
              </span>
              <Image src="/assets/howitworks.png" alt="howitworks" className="w-1/4 justify-center self-center" width={1080} height={600}/>
        </motion.div>
        <motion.div className="lg:flex hidden flex-row px-40 py-8 justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              className='flex flex-col justify-center items-center'
            >   
                <Image src="/assets/1.png" alt="one" className="w-[80%] h-auto" draggable="false" width={600} height={1080}/>
            </motion.div> 
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              className='flex flex-col justify-center items-center'
            >
               <Image src="/assets/2.png" alt="two" className="w-[80%] h-auto" draggable="false" width={600} height={1080}/>
            </motion.div> 
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
                }}  
                className='flex flex-col justify-center items-center'
            >
                <Image src="/assets/3.png" alt="three" className="w-[80%] h-auto" draggable="false" width={600} height={1080}/>
            </motion.div> 
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}  
                className='flex flex-col justify-center items-center'
            >
                <Image src="/assets/4.png" alt="three" className="w-[80%] h-auto" draggable="false" width={600} height={1080}/>
            </motion.div> 
        </motion.div>
        <motion.div className="md:hidden flex flex-col pt-20 px-[20%] pb-4 justify-center items-center overflow-hidden">
            <motion.img src="/assets/1.png" alt="one" className="w-[80%] h-[20%]" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src="/assets/2.png" alt="two" className="w-[80%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src="/assets/3.png" alt="three" className="w-[80%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src="/assets/4.png" alt="four" className="w-[80%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
        </motion.div>
        <div className="flex flex-col  overflow-hidden px-[15%] pb-4">
          <motion.div className="w-full h-full px-8 justify-center bg-gradient-to-t from-blue-300 to-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            duration: 1.8,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01]
          }}  
          >
            <div className="flex flex-row justify-between items-center sm:px-2 py-5">
              <div>
                <span className={`text-brandBlack`}>Ready to form your very <br/> own team of</span>
                <span className={`text-brandBlue`}> Bespoke Staff?</span>
              </div>
              <div className="flex justify-center content-center align-center self-center items-center">
                <UnStyledButton buttonStyle={`bg-brandBlue p-4 m-8 text-white rounded-full`} text="Start Now" redirect="contactus"/>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default HowitWorks