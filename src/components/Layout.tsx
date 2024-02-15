// import Link from "next/link";

import Image from 'next/image'
// import Navigation from '../components/navigation'
// import { useEffect, useState } from "react";

// import Button from "./navigation/navbar/Button";
import imageAsset from '../public/images/inter.png'
// import  Nav  from '../components/nav'
const Layout = ({ children }) => {


  return (
    <>
    <div className=''>

  
   {/* <Nav/> */}
   {/* <Navigation/> */}
   {/* <main className="py-6 mt-12 md:py-12"> */}
        {/* <div className="max-w-6xl px-6 mx-auto mt-10">{children}</div> */}
<main className='flex items-center justify-evenly'>
      <div className="max-w-6xl px-6 mx-auto mt-10 place-items-center">
        
      <Image
        
        src={imageAsset}
        alt="Logo"
        width="350px"
        height="350px"
        className="relative"
      />
   
            <div id="bottom-banner"  className="fixed z-50 flex justify-between w-full p-4 mt-16 border-t-2 font border-zinc-600 top-64 start-0 bg-gray-50 dark:bg-black ">
    <div className="flex items-center mx-auto">
   
            
            
            <div className="flex flex-col items-center justify-between py-6 text-center border-t border-zinc-200/50 md:flex-row">
          <p className="flex items-center px-4 text-3xl font-semibold tracking-wider text-center text-zinc-50">
            Interference
            </p>
            <p className="flex items-center px-4 pt-1 font-normal tracking-wider text-center text-zinc-400 text-md">
           coming soon ..
            </p>
            </div>
      
    </div>
  
</div>
    
    </div>
    
      </main>
      <footer className="max-w-6xl px-6 mx-auto">
       
            
          {/* <nav className="flex items-center justify-end space-x-3 md:space-x-6"> */}
            {/* <Link href="/about">
              <a className="p-1 text-sm text-gray-800 transition hover:text-blue-600">
                FAQS
              </a>
            </Link> */}
            {/* <Link href="/terms-of-sale">
              <a className="p-1 text-sm text-gray-800 transition hover:text-blue-600">
                Terms of Sale
              </a>
            </Link> */}
          {/* </nav>
          */}
    
      </footer>
      </div>
    </>
  );
};

export default Layout;
