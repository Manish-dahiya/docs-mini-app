import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"//for dragable thing


function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference}   whileDrag={{ scale: 1.2 }} className=' relative w-60 h-72 bg-zinc-900/90 rounded-[40px] py-10 px-5 text-white p-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='pt-3'>{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
            <div className='flex justify-between items-center py-4  mb-3 px-5'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 p-1 bg-zinc-200 rounded-full flex items-center justify-center'>
                    {/* close icon or download icon */}
                {data.close?<IoClose color='black' />: <LuDownload size="2em" color="black" />}   
                </span>   
            </div>
            {/* the bottom part if isOpen true ,then show*/}
            {data.tag.isOpen && 
                 <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"}`}>
                 <h3 className='text-sm flex items-center justify-center'>{data.tag.tagTitle}</h3>
             </div>
            
        
        }
           
        </div>
    </motion.div> 
  )
}

export default Card
