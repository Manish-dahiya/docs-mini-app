import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref=useRef(null);//so that card cannot be dragged outside of the foreground (drag constraints)

    const data=[
        {desc:"hello  ipsum dolor sit amet consectrur adipiscing.",filesize:".9mb",close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}},
        {desc:"hello  ipsum dolor sit amet consectrur adipiscing.",filesize:".9mb",close:true,tag:{isOpen:true,tagTitle:"Upload Now",tagColor:"blue"}},
        {desc:"hello  ipsum dolor sit amet consectrur adipiscing.",filesize:".9mb",close:true,tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green"}},

    ]
    
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-screen bg-sky-800/2 z-[3] flex gap-5 flex-wrap p-5'>
     {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
     ))}
    </div>
  )
}

export default Foreground
