import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-center items-center mt-4 flex-col'>
      <Link to={'/'} className='text-4xl uppercase font-light-'>Quiz Game</Link>
      <hr className='w-3/4 mt-2 border border-slate-400'/>

      
    </div>
  )
}

export default Header
