"use client";
import Image from "next/image"
import Link from "next/link";

import { motion } from "framer-motion"
import { useParallax } from "@/utils/parralax";
import { Button } from "../ui/moving-border";
import { IoMdLogIn } from "react-icons/io";

const HeroSection = () => {

  useParallax();

  return (
    <div className="flex flex-col sm:px-20 sm:h-screen h-[40vh]">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        className="font-bold text-md sm:text-6xl py-4 pt-[40%] sm:pt-[28%] md:pt-[60%] lg:pt-[65%] xl:pt-[28%] px-4 self-start bg-gradient-to-bl from-slate-500 to-slate-800 bg-clip-text text-transparent z-20 drop-shadow-2xl parallax"
        data-speed="0.4"
      >
        We take the <span className="bg-gradient-to-bl from-violet-500 to-blue-600 bg-clip-text text-transparent">complicated</span>
        <br/>out of your outsourcing needs!
      </motion.h1>
      <div className="parallax px-4 z-40" data-speed="0.4">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold text-[15px] hover:text-brandBlue duration-300 transition-colors ease-in-out"
        >
          <Link href="/contactus" className="flex flex-row gap-2">
            <h1 className="self-center">Get Started</h1>
            <IoMdLogIn className="self-center" size="2rem"/>
          </Link>
        </Button>
      </div>
      {/*<Image className="absolute sm:right-20 top-[70px] sm:top-32 w-screen sm:w-[55%] md:hidden lg:hidden xl:block sm:h-[75%] z-10 parallax sm:rounded-xl" src="/assets/herobg.jpg" width={1200} height={800} alt="office" data-speed="0.3"/>*/}
      <Image className="absolute left-0 w-screen h-full object-cover hidden sm:hidden md:block lg:block z-10 parallax" src="/assets/office.jpg" width={1600} height={800} alt="office" data-speed="0.3"/>
    </div>
  )
}

export default HeroSection