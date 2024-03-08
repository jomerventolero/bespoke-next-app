"use client"
import ReCAPTCHA from 'react-google-recaptcha'
import { motion } from 'framer-motion'
import React, { FormEvent, useRef, useState } from 'react'
import styles from '@/app/style'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

const ContactUs = () => {

  const form = useRef(null);
  const [isVerified, setIsVerified] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleVerify = () => {
    setIsVerified(true)
  }

  
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitted(true);

    try {
        if (form.current) {
            const result = await emailjs.sendForm('service_ileepgo', 'bespoke-email-template', form.current, '4t8EhVp1pW3EIe4Zr');
            console.log(result);
        }
    } catch (error) {
        if (error) {
            console.error(error);
        }
    }
    };


    return (
        <section id="contactus">
        <motion.div className={`${!isSubmitted ? "hidden" : "w-screen flex text-[45px] text-center text-brandBlue font-bold justify-center py-48"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 4.5,
                delay: 0.2,
            }}
    
        >
            Thank you for inquiring to us!
        </motion.div>
        <div className={`${ isSubmitted ? "hidden" : "flex flex-row justify-center pt-[5%] pb-[30px]"}`}>
            <motion.div className="md:flex hidden flex-col bg-slate-900 shadow-2xl rounded-[15px] pt-[20px] h-auto w-[25%] pl-8 pr-8 py-6 object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.9,
                    delay: 0.5
            }}
            >
        
                <h1 className={`text-white font-poppins font-semibold ${styles.textResContactForm}`}>CONTACT <br/>INFORMATION</h1>
                <span className="text-white">You can reach us at:</span>
                <div className="flex flex-row justify-star pt-8">
                    <Image src="/assets/Icons/21.png" alt="phone" className="" width={50} height={50}/>
                    <span className="text-white font-semibold self-center pl-4 sm:text-lg text-xs">+63 917 165 8840</span>
                </div>
                <div className="flex flex-row justify-start pt-8">
                    <Image src="/assets/Icons/22.png" alt="mail" className="" width={50} height={50}/>
                    <span className="text-white font-semibold self-center pl-4 sm:text-lg text-xs">info@mybespokestaff.com</span>
                </div>
                <div className="flex flex-row justify-start pt-8">
                    <Image src="/assets/Icons/23.png" alt="location" className="w-[20%] h-[40%] aspect-square" width={80} height={50}/>
                    <span className="text-white font-semibold self-center pl-4 sm:text-lg text-xs">King's Court Building 1, Level 8, Chino Roces Ave, Makati, Metro Manila, Philippines.</span>
                </div>
                <div className="flex flex-row gap-4 justify-start pt-[4rem] pb-[2rem]">
                    <Image src="/assets/fb_logo.png" alt="fblogo" className="w-[10%] " width={50} height={50}/>
                    <Image src="/assets/linkedin_logo.png" alt="fblogo" className="w-[10%] aspect-square" width={50} height={50}/>
                </div>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5
                }}
                className="flex lg:hidden justify-center px-8"
            >
            <form ref={ form } className={`flex flex-col px-8 pt-2 shadow-2xl rounded-2xl transition-all ease-in-out duration-300`} onSubmit={ sendEmail }>
                <div className='flex flex-col'>
                    <span className="text-brandBlue font-semibold text-[35px]">Explore More about our Services.</span>
                    <span>Talk to us.</span>
                    <h5>You are just a form away. </h5>
                    <input className="border-b-2 border-slate-300 p-4 my-1 outline-none" placeholder="Name*" type="text" name="name" id="name" required/>
                    <div className="flex flex-col justify-between">
                        <input className="border-b-2 border-slate-300 p-4 my-1 outline-none" placeholder="Email Address*" type="text" name="email" id="email" required/>
                        <input className="border-b-2 border-slate-300 p-4 my-1 outline-none" placeholder="Phone Number*" type="number" name="phonenumber" id="phonenumber" required/>
                    </div>
                    <input className="border-b-2 border-slate-300 p-4 my-1 outline-none" placeholder="Company Name*" type="text" name="companyname" id="companyname" required/>
                    <input className="border-b-2 border-slate-300 p-4 my-1 outline-none" placeholder="Tell us about your requirement" type="text" name="requirement" id="requirement" required/>
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA ?? ''}
                        onChange={ () => {handleVerify}}   
                        className="py-4"
                    />
                    <div className="flex flex-row pt-4 mb-4">
                        <button type="submit" className={`shadow-2xl text-[75%] px-[4rem] py-[1rem] rounded-[20px] font-poppins font-semibold 
                        ${ isVerified ? "text-white bg-indigo-500 shadow-indigo-500/50" : "text-brandBlack bg-transparent" }`} disabled={!isVerified}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5
                }}
                className="lg:flex hidden pl-8"
            >
            <form ref={ form } className={`flex flex-col px-8 pt-3 gap-4 shadow-2xl rounded-2xl`} onSubmit={ sendEmail }>
                <div className='flex flex-col'>
                    <span className="text-brandBlue font-semibold text-[35px]">Explore More about our Services.</span>
                    <span>Talk to us.</span>
                    <h5>You are just a form away. </h5>
                    <input className="rounded-lg border-b-2 border-slate-300 my-2 p-2 outline-none transition-all ease-in-out duration-300 hover:border-brandBlue active:border-brandBlue" placeholder="Name*" type="text" name="name" id="name" required/>
                    <div className="flex flex-row justify-between">
                        <input className="rounded-lg border-b-2 my-2 border-slate-300 p-2 outline-none transition-all ease-in-out duration-300 hover:border-brandBlue" placeholder="Email Address*" type="text" name="email" id="email" required/>
                        <input className="rounded-lg border-b-2 my-2 border-slate-300 p-2 outline-none transition-all ease-in-out duration-300 hover:border-brandBlue" placeholder="Phone Number*" type="tel"   min="11" max="12" name="phonenumber" id="phonenumber" required/>
                    </div>
                    <input className="rounded-lg border-b-2 my-2 border-slate-300 p-2 outline-none transition-all ease-in-out duration-300 hover:border-brandBlue" placeholder="Company Name*" type="text" name="companyname" id="companyname" required/>
                    <input className="rounded-lg border-b-2 my-2 border-slate-300 p-2 outline-none transition-all ease-in-out duration-300 hover:border-brandBlue" placeholder="Tell us about your requirement" type="text" name="requirement" id="requirement" required/>
                    <ReCAPTCHA 
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA ?? ''}
                        onChange={ () => {handleVerify}}  
                        className="py-4"
                    />
                    <div className="flex flex-row pt-4 ">
                        <button type="submit" className={`shadow-2xl text-[75%] px-[4rem] py-[1rem] rounded-[20px] font-poppins font-semibold 
                        ${ isVerified ? "text-white bg-brandBlue" : "text-brandBlack bg-transparent" }`} disabled={!isVerified}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            </motion.div>
        </div>
        </section>
    )
}

export default ContactUs