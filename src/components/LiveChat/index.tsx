"use client"
import React from 'react'
import { IoChatbubbleEllipsesSharp, IoWarning } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";


const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const LiveChatInterface = () => {

    return (
      <motion.div 
        className={`${isChatOpen ? "block" : "hidden"} fixed bottom-[8%] right-[2%] px-2 py-2 w-[350px] h-[50%] bg-white bg-dot-slate-300 text-brandBlack rounded-2xl flex flex-col justify-between z-50`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row gap-2 justify-between">
          <span className="flex flex-row gap-2">
            Bespoke Chat <IoChatbubbleEllipsesSharp className="text-brandBlack" size="1.5rem" />
          </span>
          <IoIosCloseCircle className="text-brandBlack cursor-pointer" size="1.5rem" onClick={() => {setIsChatOpen(!isChatOpen)}} />
        </div>
          <div className="w-full bg-white text-center self-center items-center align-middle flex flex-row gap-2 justify-center">
            Under Maintenance <IoWarning />
          </div>
      </motion.div>
    )
  }
  

  return (
    <>
      <div className={`fixed bottom-[0%] right-[2%] px-5 w-[250px] gap-2 h-[45px] bg-brandBlue text-white rounded-t-2xl flex flex-row justify-start self-start items-center cursor-pointer z-50`} onClick={() => {setIsChatOpen(!isChatOpen)}}>
          Bespoke Chat <IoChatbubbleEllipsesSharp className="text-white" size="1.5rem" />
      </div>
      <LiveChatInterface />
    </>
  )
}

export default LiveChat