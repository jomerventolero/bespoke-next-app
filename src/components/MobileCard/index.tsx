import React from 'react'
import Image from 'next/image'

type Props = {
  image1: string,
  text: string
}

const MobileCard: React.FC<Props> = ({image1, text}) => {
  return (
    <div className="flex flex-col bg-slate-300 p-4 rounded-[10px] justify-center items-center w-[50%]">
        <Image src={image1} alt="icon" className="w-[64px]" width={64} height={64}/>
        <h1 className='text-[8px] text-center font-poppins font-medium'> { text } </h1>
    </div>
  )
}

export default MobileCard