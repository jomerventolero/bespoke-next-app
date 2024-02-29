"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { info } from '@/constants/info'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <section className="hidden sm:flex flex-col gap-4">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8

            }}
            className="flex flex-row gap-10 justify-between px-20 py-4"
        >
            <div className="flex flex-col gap-4 justify-start ">
                <Image src="/assets/logo-t.png" alt="logo" className="w-32" width={256} height={256}/>
                <div className="flex flex-row gap-4">
                    <Link href="https://www.facebook.com/MyBespokeStaff" target='_blank'>
                        <Image src="/assets/fb_logo.png" alt="logo" className="w-8" width={256} height={256} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bespoke-enterprise-solutions-0089882a0/" target='_blank'>
                        <Image src="/assets/linkedin_logo.png" alt="logo" className="w-8" width={256} height={256} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-start ">
                <h1 className="text-2xl font-semibold text-brandBlue">Contact Us</h1>
                <Link href={`mailto:${info.contacts.email}`}>
                    <h1 className="text-xl font-medium">{info.contacts.email}</h1>
                </Link>
                <h1 className="text-2xl font-semibold text-brandBlue">Company Address</h1>
                <Link href="https://www.google.com/maps/place/King's+Court+Building+1,+Chino+Roces+Ave,+Legazpi+Village,+Makati,+Metro+Manila/@14.5576121,121.0109105,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c90cf6209dbb:0x4cad4f9d0aaefd8b!8m2!3d14.5576121!4d121.0134854!16s%2Fg%2F12hphv4lk?entry=ttu" target="_blank">
                    <h1 className="text-xl font-medium">{info.address}</h1>
                </Link>
            </div>
            <div className="flex flex-col gap-4 justify-start ">
                <h1 className="text-2xl font-semibold text-brandBlue">Quick Links</h1>
                <Link href={info.quickLinks.about.href}>
                    <h1 className="text-xl font-medium">{info.quickLinks.about.name}</h1>
                </Link>
                <Link href={info.quickLinks.resources.href}>
                    <h1 className="text-xl font-medium">{info.quickLinks.resources.name}</h1>
                </Link>
                <Link href={info.quickLinks.jobs.href}>
                    <h1 className="text-xl font-medium">{info.quickLinks.jobs.name}</h1>
                </Link>
                <Link href={info.quickLinks.ourServices.href}>
                    <h1 className="text-xl font-medium">{info.quickLinks.ourServices.name}</h1>
                </Link>
                <Link href={info.quickLinks.howItWorks.href}>
                    <h1 className="text-xl font-medium">{info.quickLinks.howItWorks.name}</h1>
                </Link>
                <Link href={info.quickLinks.dataSecurity.href}>
                    <h1 className="text-xl font-medium">{info.quickLinks.dataSecurity.name}</h1>
                </Link>
            </div>
            <div className="flex flex-col gap-4 justify-start">
                <div className="flex flex-col gap-4 justify-end">
                    <h1 className="text-2xl font-semibold text-brandBlue">Site Tools</h1>
                    <Link href={info.siteTools.privacy.href}>
                        <h1 className="text-xl font-medium">{info.siteTools.privacy.name}</h1>
                    </Link>
                    <Link href={info.siteTools.terms.href}>
                        <h1 className="text-xl font-medium">{info.siteTools.terms.name}</h1>
                    </Link>
                    <Link href={info.siteTools.cookies.href}>
                        <h1 className="text-xl font-medium">{info.siteTools.cookies.name}</h1>
                    </Link>
                    <Link href={info.siteTools.sitemap.href}>
                        <h1 className="text-xl font-medium">{info.siteTools.sitemap.name}</h1>
                    </Link>
                </div>
            </div>
        </motion.div>
        <h1 className="self-center">© 2023 Bespoke Enterprise Solutions Inc.</h1>
    </section>
  )
}

export default Footer