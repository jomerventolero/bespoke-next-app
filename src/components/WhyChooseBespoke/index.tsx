"use client";
import { motion } from 'framer-motion'
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Image from 'next/image';



const WhyChooseBespoke = () => {
  return (
    <div className="flex flex-col gap-8 px-2 sm:px-10 lg:px-40 py-5 sm:py-10 bg-white z-40">
      
      <div className={`flex flex-row justify-center bg-gradient-to-b from-violet-500 to-indigo-400 font-poppins font-semibold py-[30px] gap-4 my-2 rounded-xl`}>
        <span className={`text-xl text-white`}>WHY CHOOSE</span>
        <span className={`text-xl text-brandBlack`}>BESPOKE?</span>
      </div>
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 gap-4`}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "fadeIn",
            duration: 0.8,
            delay: 0.2
          }}
          viewport={{ once: true }}
        >
          <Image loading="lazy" src="/assets/middlemen.jpg" alt="middlemen" draggable="false" className="hidden md:block rounded-xl shadow-2xl drop-shadow-2xl" width={1920} height={1080}/>
          <Image loading="lazy" src="/assets/middlemen.jpg" alt="middlemen" draggable="false" className="block md:hidden rounded-xl shadow-2xl drop-shadow-2xl" width={1920} height={1080}/>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "fadeIn",
            duration: 0.8,
            delay: 0.8
          }}
          viewport={{ once: true }}
        >
          <span
            className={`font-poppins font-medium md:text-2xl text-center text-brandBlack`}
          >
            <TextGenerateEffect words="We are not middlemen. We find out what you need, train your bespoke staff and implement your requirements and expectations."/>
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "fadeIn",
            duration: 0.8,
            delay: 0.8
          }}
          viewport={{ once: true }}
        >
          <Image loading="lazy" src="/assets/speakingwithus.jpg" alt="image" draggable="false" className="block md:hidden rounded-xl shadow-2xl drop-shadow-2xl" width={1920} height={1080}/>
          <span
            className={`font-poppins font-medium md:text-2xl pt-4 md:pt-0 text-center text-brandBlack`}
          >
            <TextGenerateEffect words='20 years combined experience with key personnel having experience in the main functions of the freight forwarding and international trade industry just by speaking to us you can tell immediately whether we are a fit or not to your business.' />
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "fadeIn",
            duration: 0.8,
            delay: 0.2
          }}
          viewport={{ once: true }}
        >
          <Image loading="lazy" src="/assets/speakingwithus.jpg" alt="image" draggable="false" className="hidden md:block rounded-xl shadow-2xl drop-shadow-2xl" width={1920} height={1080}/>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "fadeIn",
            duration: 0.8,
            delay: 0.2
          }}
          viewport={{ once: true }}
        >
          <Image src="/assets/containers.jpg" alt="image" draggable="false" className="hidden md:block rounded-xl shadow-2xl drop-shadow-2xl" width={1920} height={1080}/>
          <Image src="/assets/containers.jpg" alt="image" draggable="false" className="block md:hidden rounded-xl shadow-2xl drop-shadow-2xl" width={1920} height={1080}/>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "fadeIn",
            duration: 0.8,
            delay: 0.8
          }}
          viewport={{ once: true }}
        >
          <span
            className={`font-poppins font-medium md:text-2xl text-center text-brandBlack`}
          >
            <TextGenerateEffect words="Being up to date on technology, our focus on the security of your information that we process and the transparency of how your team is doing is at our utmost priority." />
          </span>
        </motion.div>
      </motion.div>
      <div className={`shadow-2xl drop-shadow-2xl rounded-xl bg-gradient-to-t from-blue-400 to-indigo-400 w-auto h-auto justify-center py-8 sm:flex hidden`}>
        <a href="/contactus" className={`shadow-2xl drop-shadow-2xl font-poppins font-medium transition-colors ease-in-out duration-300 bg-brandBlack hover:bg-brandBlue text-center text-white rounded-[50px] w-[15%] h-[80%] my-2 py-4`}>Contact Us</a>
      </div>
    </div>
  )
}



export default WhyChooseBespoke