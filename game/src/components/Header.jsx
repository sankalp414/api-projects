import React, { useState } from 'react'
import { HiMagnifyingGlass} from "react-icons/hi2";
import { HiMiniMoon} from "react-icons/hi2";
import { HiMiniSun} from "react-icons/hi2";
const Header = () => {
    const [Toggle,setToggle]= useState(true)
  return (
    <div className='flex items-center p-3'>
      <h6 className='block'>logo</h6>
      <div className='flex bg-slate-200 p-2 w-full align-middle gap-2 rounded-full'>
        <HiMagnifyingGlass />
        <input type="text" className='bg-transparent w-full outline-none'/>
      </div>
      <div>
        {Toggle? <HiMiniMoon className='text-{35px} bg-slate-200 text-color-black p-1 rounded-full cursor-pointer'onClick={setToggle(!Toggle)}/> : <HiMiniSun className='text-{35px} bg-slate-200 text-color-black p-1 rounded-full cursor-pointer'onClick={setToggle(!Toggle)}/>}
        
      </div>
    </div>
  )
}

export default Header