
import React from 'react'

function Title({gallery , campus}) {
  return (
    <div className='h-20 text-center mt-5'>
        <h4 className='font-bold text-[#212ea0] text-xl'>{gallery ||"Our PROGRAM"}</h4>
        <p className='text-3xl text-[#000f38] font-medium'>{campus ||'What We  Offer'}</p>
    </div>
  )
}

export default Title


