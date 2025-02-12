import React from 'react'
import video from '../assets/college-video-6XtGR-D3.mp4'

const Videoplayer = () => {
  return (
    <div className='absolute w-full flex justify-center items-center h-full z-50'>
      <video src={video} controls muted autoPlay className={`w-[70%] rounded-2xl hidden `}></video>
    </div>
  )
}

export default Videoplayer
