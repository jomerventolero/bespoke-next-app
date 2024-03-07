"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/moving-border'
import Link from 'next/link'
import Image from 'next/image'


const Resources = () => {
  return (
    <section id="resources" className='pt-20 py-10'>
        <motion.div 
          className="lg:flex flex-col gap-4 hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4
          }}
          >
         <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] z-60 rounded-lg sm:flex hidden">
            <Image src="/assets/resources1.png" alt="resources1" className="w-3/4 mx-auto rounded-l-lg" width={1080} height={1080}/>
            <div className="xs:flex row">
              <blockquote className={`px-[10%] py-5`}>
                <h1 className={`  font-poppins font-semibold text-brandBlack pb-6`}>
                  WHY DO FREIGHT FORWARDING COMPANIES USE BPO SERVICES?
                </h1>
                <p className={`text-white text-justify pb-2`}>
                  Freight forwarding companies specialize in managing and executing the flow of goods from one destination to another and act as an intermediary between shipper and transporter. This leads many to consider how & why freight forwarding companies...
                </p>
                
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold text-[15px] hover:text-brandBlue duration-300 transition-colors ease-in-out"
                >
                    <Link href="/web/whydofreight" className="flex flex-row gap-2">
                        <h1 className="self-center">Read More</h1>
                    </Link>
                </Button>
              </blockquote>
            </div>
          </figure>

          <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] rounded-lg h-full sm:flex hidden">
            <Image src="/assets/resources2.png" alt="resources2" className="w-3/4 mx-auto rounded-l-lg" width={1080} height={1080}/>
            <div className="">
              <blockquote className={`px-[10%] py-5`}>
                <h1 className={`  font-poppins font-semibold text-brandBlack pb-6`}>
                WHY SHOULD YOU CHOOSE TO HIRE A BESPOKE STAFF?
                </h1>
                <p className={`text-white text-justify pb-2`}>
                  Learn why choosing Bespoke as your offshore outsourcing partner makes business sense for you. Unlike the majority of off shore companies that offer outsourcing services, we have an Australian office and Australian executive staff...
                </p>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold text-[15px] hover:text-brandBlue duration-300 transition-colors ease-in-out"
                >
                    <Link href="/web/whyshouldyouhire" className="flex flex-row gap-2">
                        <h1 className="self-center">Read More</h1>
                    </Link>
                </Button>
              </blockquote>
            </div>
          </figure> 
        </motion.div>
          


        <motion.div 
          className="lg:hidden flex-col gap-4 pt-[10%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4
          }}
          >
         <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] z-60 rounded-lg h-full mb-8">
            <Image src="/assets/resources1.png" alt="resources1" className="w-1/2 h-fit mx-auto pt-1 rounded-lg" width={1080} height={1080}/>
            <div className="xs:flex row">
              <blockquote className={`px-[10%] pt-[5%]`}>
                <h1 className={`  font-poppins font-semibold text-brandBlack pb-6 text-center`}>
                  WHY DO FREIGHT FORWARDING COMPANIES USE BPO SERVICES?
                </h1>
                <p className={`text-white  text-justify pb-2`}>
                  Freight forwarding companies specialize in managing and executing the flow of goods from one destination to another and act as an intermediary between shipper and transporter. This leads many to consider how & why freight forwarding companies...
                </p>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold text-[15px] hover:text-brandBlue duration-300 transition-colors ease-in-out"
                >
                    <Link href="/web/whydofreight" className="flex flex-row gap-2">
                        <h1 className="self-center">Read More</h1>
                    </Link>
                </Button>
              </blockquote>
            </div>
          </figure>

          <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] rounded-lg h-full">
            <Image src="/assets/resources2.png" alt="resources2" className="w-1/2 h-fit mx-auto pt-1 rounded-lg" width={1080} height={1080}/>
            <div className="">
              <blockquote className={`px-[10%] pt-[5%]`}>
                <h1 className={`  font-poppins font-semibold text-brandBlack pb-6 text-center`}>
                WHY SHOULD YOU CHOOSE TO HIRE A BESPOKE STAFF?
                </h1>
                <p className={`text-white text-justify pb-2`}>
                  Learn why choosing Bespoke as your offshore outsourcing partner makes business sense for you. Unlike the majority of off shore companies that offer outsourcing services, we have an Australian office and Australian executive staff...
                </p>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold text-[15px] hover:text-brandBlue duration-300 transition-colors ease-in-out"
                >
                    <Link href="/web/whyshouldyouhire" className="flex flex-row gap-2">
                        <h1 className="self-center">Read More</h1>
                    </Link>
                </Button>
              </blockquote>
            </div>
          </figure> 
        </motion.div>
    </section>
  )
}

export default Resources