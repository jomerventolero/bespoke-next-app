"use client"
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import { links } from '@/constants/navlinks'
import { motion } from 'framer-motion'
import { IoIosCloseCircleOutline, IoMdMenu } from "react-icons/io";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Button } from "../ui/moving-border";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [toggle, setToggle] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsOpen(visible || isHovered);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setToggle(false)
      }
    })
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isHovered, prevScrollPos, toggle, showTypewriter]);

  const text = [{ text: "Bespoke "}, { text: "Enterprise "}, {text: "Solutions"}, { text: "Inc."}];
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 sm:w-[98%] flex flex-row gap-4 justify-between bg-white ${toggle ? "mx-0 my-0" : "mx-2 my-2"} rounded-full drop-shadow-2xl transition-transform duration-300 ${isOpen ? '' : '-translate-y-full'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div>
        <h6 className="hidden sm:block pb-20 absolute top-[2%] sm:left-[4%] left-[6%] lg:text-[15px] text-brandBlack font-semibold font-poppins md:text-12px]">Bespoke Enterprise Solutions Inc.</h6>
        <Link href="/" className="self-center">
          <Image src="/assets/logo-t.png" alt="logo" width={100} height={100} className="self-center p-2 w-14 sm:w-16"/>
        </Link>
      </div>

    <div className="flex flex-row gap-4">

      <div className="self-center font-semibold hover:text-brandBlue duration-300 transition-all ease-in-out">
        <Link href="/web/contactus" target="_blank">
          Contact Us
        </Link>
      </div>

      <div className="flex">
            <IoMdMenu size={30} className={`mr-4 self-center ${toggle ? 'hidden' : 'block'} cursor-pointer hover:text-brandBlue duration-300 transition-all ease-in-out`} onClick={() => setToggle(!toggle)}/>
      </div>
    </div>
      <motion.div 
          initial={{ opacity: 0, x: 100}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`${toggle ? 'block' : 'hidden'} w-screen h-screen bg-white absolute flex flex-row py-4 items-end px-4 z-50 bg-dot-slate-400 text-3xl font-light`}>
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 1 }}
            className="flex flex-row gap-8 pt-4 absolute top-10 left-10">
                <Image src="/assets/logo-t.png" alt="logo" className="w-32" width={256} height={256}/>
                <TypewriterEffect words={text} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[250px] flex flex-col justify-start absolute top-10 right-4"
          >
            <IoIosCloseCircleOutline className={`self-end text-slate-500 ${toggle ? 'block' : 'hidden'} mr-8 cursor-pointer z-50`} size="3rem" onClick={() => setToggle(!toggle)}/>
            {links.map((link) => {
              return (
                <Link href={link.href} className={`${pathname === link.href ? 'text-brandBlue' : 'text-slate-400'} self-end py-5 font-semibold hover:scale-125 hover:text-brandBlue duration-300 transition-all ease-in-out sm:pr-10`} target={`${link.external ? '_blank' : ''}`} onClick={() => setToggle(!toggle)}>{link.name}</Link>
              )
            }
            )}
            <div className="flex flex-row justify-end px-10 gap-4">
              <Link href="https://www.facebook.com/MyBespokeStaff" target='_blank' className="self-center">
                  <Image src="/assets/fb_logo.png" alt="logo" className="w-12" width={256} height={256} />
              </Link>
              <Link href="https://www.linkedin.com/in/bespoke-enterprise-solutions-0089882a0/" target='_blank' className="self-center">
                  <Image src="/assets/linkedin_logo.png" alt="logo" className="w-12" width={256} height={256} />
              </Link>
            </div>
          </motion.div>
      </motion.div>
    

    </div>
  )
}

export default Navbar;
