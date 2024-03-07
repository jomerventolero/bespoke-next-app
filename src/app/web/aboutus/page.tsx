"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'


const AboutUs = () => {
  return (
    <div id="aboutus" className="flex flex-col overflow-hidden justify-center">
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 1.8,
                delay: 0.5,
            }}
            className="flex flex-col justify-center">
            <Image src="/assets/aboutus.png" draggable={false} alt="aboutus" className="sm:block hidden w-auto h-auto" width={1080} height={600}/>
            <Image src="/assets/aboutusmobile.png" draggable={false} alt="aboutus-mobile" className="sm:hidden w-auto h-auto" width={1080} height={600}/>
            <Image src="/assets/aboutusmobile1.png" draggable={false} alt="aboutus-mobile1" className="sm:hidden w-auto h-auto p-8" width={1080} height={600}/>
            <div className="flex justify-center py-5">
                <h1 className="text-brandBlue font-poppins font-semibold text-[30px]">WHO WE ARE</h1>
            </div>
            <span className="flex justify-center text-center py-5 px-[10%]">
            Bespoke is led by a team of professionals that have at least 20 years combined experience in the freight forwarding industry in Australia. We are well versed with the importation and exportation requirements that are unique to Australia. Be it the rules and regulations of AQIS &lsquo;Australian Quarantine and Inspection Scheme&rsquo; or the daily operations of the various departments such as the operations / forwarding team to the cartage department and the customs broker department, we have done it all. Do drop us a quick enquiry of how we can be of service to you on your staffing requirements. We are certain we would even be able to advise you on building a team of staff that can generate more income for your business that you didn't know you needed.
            </span>    
        </motion.div>
        <div className="flex flex-row px-[10%] py-4">
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
              <Image src="/assets/aboutus/1.png" draggable={false} alt="bespokemission" className="md:block hidden w-[1080px]" width={1080} height={800}/>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex flex-col justify-center text-center">
                <h1 className="font-poppins font-semibold text-brandBlue text-[30px] py-2">BESPOKE MISSION</h1>
                <span className="px-[20%]">We work towards operating in a manner where our client&#39;s are satisfied that their business processes are met with the highest standard of service and effort by the top class talents that we hire.</span>
            </motion.div>
        </div>
        <div className="flex flex-row px-[10%] py-4">
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex flex-col justify-center text-center">
                <h1 className="font-poppins font-semibold text-brandBlue text-[30px] py-2">BESPOKE VISION</h1>
                <span className="px-[20%]">We believe in quality over quantity. Therefore we ensure that we get the best person to do the job right with no expense spared on the constant upgrade of workforce skills, technology and productivity.</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
              <Image src="/assets/aboutus/2.png" draggable={false} alt="bespokevalues" className="md:flex hidden w-[1080px]" width={1080} height={800}/>
            </motion.div>
        </div>
            <div className="flex flex-row px-[10%] py-4">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
              <Image src="/assets/aboutus/3.png" draggable={false} alt="bespokevalues" className="md:block hidden w-[1080px]" width={1080} height={800}/>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex flex-col justify-center text-center">
                <h1 className="font-poppins font-semibold text-brandBlue text-[30px] py-2">BESPOKE CORE VALUES</h1>
                <span className="px-[20%]">We strive to maintain our integrity whenever it comes to fairness in the workplace, stellar productivity on the services we provide and securing the data that we process on behalf of our customers.</span>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUs