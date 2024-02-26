"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row gap-4 justify-between bg-white p-2 px-4 m-2 rounded-2xl">
      <div>
      <h6 className="hidden lg:block pb-20 absolute top-[1%] left-[6.5%] lg:text-[15px] font-semibold font-poppins md:text-12px]">Bespoke Enterprise Solutions Inc.</h6>
        <Link href="/" className="self-center">
          <Image src="/assets/logo.svg" alt="logo" width={100} height={100} className="self-center"/>
        </Link>
      </div>
      <div className="flex sm:hidden flex-row gap-4">

      </div>
      <div className="sm:flex flex-row gap-8 hidden">
        <Link href="/" className="self-center text-black font-semibold ">
          Home
        </Link>
        <Link href="/" className="self-center text-black font-semibold ">
          Our Services
        </Link>
        <Link href="/" className="self-center text-black font-semibold ">
          How it works
        </Link>
        <Link href="/" className="self-center text-black font-semibold ">
          Jobs
        </Link>
        <Link href="/" className="self-center text-black font-semibold ">
          Data Security
        </Link>
        <Link href="/" className="self-center text-black font-semibold ">
          About Us
        </Link>
        <Link href="/" className="self-center text-black font-semibold ">
          Resources
        </Link>
      </div>
    </nav>
  )
}

export default Navbar