import React from 'react'
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.png'
import nexticon from '../assets/next-icon.png'


const Campus = () => {
  return (
    <>
    <div className='flex w-[90%] m-auto justify-between' id='gallery'>
      <img src={gallery1} alt="" className='w-72 rounded-lg'/>
      <img src={gallery2} alt="" className='w-72 rounded-lg'/>
      <img src={gallery3} alt="" className='w-72 rounded-lg'/>
      <img src={gallery4} alt="" className='w-72 rounded-lg'/>

    </div> 

    <div className='w-[90%] m-auto my-6 border-red-600'>
    <button className="bg-blue-600 rounded-full px-8 py-2 font-semibold m-auto  flex justify-center text-white items-center gap-2">See more here
            <img src={nexticon} alt=""  className="w-4 py-2"/>
          </button>    
    </div>
    </>
  )
}

export default Campus
