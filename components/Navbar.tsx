"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { NAV_LINKS } from '@/constant';

function Navbar() {

 
   const [isclick, setisclick] = useState<boolean>(false);
 
   function toggleMenu ():void{
    setisclick(!isclick);
   }

  return (
    <div className='bg-black bg-opacity-25 w-full h-16 pt-3  flex relative'> 
    
    <div className='flex gap-2 ml-2 '>

        <button >
    <Link href="/home" >
    <img src="./icon.png"  width={29} alt="" />
    </Link>
        </button>

        <h1 className=' font-serif text-white font-extrabold text-xl tracking-wider mt-2' > <span className=' text-yellow-300 text-3xl ' >T</span>INKER</h1>

    </div>

    <div className='hidden lg:flex gap-5 absolute right-5 '>
        <div className='flex font-serif text-lg tracking-wider gap-4 mt-1 ' >

       
        {NAV_LINKS.map((navlink) => (
        <ul>
            <li className='hovernav text-white ' > <Link  href={navlink.Link} >{navlink.lable}</Link> </li>
        </ul>
          ))}
        </div>
        
      
    </div>

    <button onClick={toggleMenu} >
        {isclick? ( <img src="./close.png" alt="" width={32}
        height={32} className="inline-block cursor-pointer lg:hidden absolute right-5 -mt-5 " />  ):
     <img src="./list.png "  alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden absolute right-5 -mt-5 " />

        }
    </button>

    {isclick &&(
                <div className='flex flex-col font-serif text-lg tracking-wider gap-4 mt-1 bg-black items-center w-full h-fit z-20   absolute top-14 right-5 p-8 font-bold sm:hidden ' >
 
                <ul>
                    <li className='hovernav' >Home</li>
                </ul>
                <ul>
                    <li className='hovernav' >Our Work</li>
                </ul>
                <ul>
                    <li className='hovernav' >Service</li>
                </ul>
                <ul>
                    <li className='hovernav' >About</li>
                </ul>
                <button className="bg-green-500 p-2 px-5 tracking-wider mt-  rounded-2xl" >Contact</button>

                </div>
    )}
    </div>
  )
}

export default Navbar