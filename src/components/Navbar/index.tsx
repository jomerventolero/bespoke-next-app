"use client"
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import { links } from '@/constants/navlinks'
import { motion } from 'framer-motion'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [toggle, setToggle] = useState(false)

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsOpen(visible || isHovered);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHovered, prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 sm:w-[98%] flex flex-row gap-4 justify-between bg-white p-2 sm:px-4 mx-4 my-2 rounded-full sm:rounded-2xl drop-shadow-2xl transition-transform duration-300 ${isOpen ? '' : '-translate-y-full'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div>
        <h6 className="hidden sm:block pb-20 absolute top-[1%] left-[6.5%] lg:text-[15px] font-semibold font-poppins md:text-12px]">Bespoke Enterprise Solutions Inc.</h6>
        <Link href="/" className="self-center">
          <Image src="/assets/logo-t.png" alt="logo" width={100} height={100} className="self-center w-14 sm:w-32"/>
        </Link>
      </div>

      <div className={`${toggle ? 'block' : 'hidden'}`}>
        <motion.div>
          {links.map((link) => {
            return (
              <Link href={link.href} className={`${pathname === link.href ? 'text-brandBlue' : 'text-brandBlack'} self-center text-black font-semibold hover:text-brandBlue duration-300 transition-colors ease-in-out`}>{link.name}</Link>
            )
          }
          )}
        </motion.div>
      </div>
      
      <div className="hidden sm:flex flex-row gap-8 text-xl">
        {links.map((link) => {
            return (
              <Link href={link.href} className={`${pathname === link.href ? 'text-brandBlue' : 'text-brandBlack'} self-center text-black font-semibold hover:text-brandBlue duration-300 transition-colors ease-in-out`}>{link.name}</Link>
            )
          }
        )}
      </div>

    </nav>
  )
}

export default Navbar;
