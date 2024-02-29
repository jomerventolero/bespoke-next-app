"use client"

import { Meteors } from '../ui/meteors'
import { motion } from 'framer-motion'

import Image from 'next/image';
import Link from 'next/link';

type Props = {
    title: string;
    image: string;
    url: string;
    delayP: number,
    durationP: number
}

const MeteorCard: React.FC<Props> = ({ title, image, url, delayP, durationP}) => {
  return (
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: delayP,
            duration: durationP
        }}
        className="w-full relative max-w-xs flex flex-col gap-4">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.60] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-row justify-end items-start">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                {title}
            </h1>
            <div className="flex flex-col justify-center items-center">
                <Image src={image} alt="" className="w-1/2" width={256} height={256}/>
                <Meteors number={20} />
                <Link className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 hover:border-brandBlue duration-300 transition-colors ease-in-out" href={url}>
                    Explore
                </Link>
            </div>
        </div>
      </motion.div>
  )
}

export default MeteorCard