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
    <div>

  
   {/* <Nav/> */}
   {/* <Navigation/> */}
   {/* <main className="py-6 mt-12 md:py-12"> */}
        {/* <div className="max-w-6xl px-6 mx-auto mt-10">{children}</div> */}
<main>
      <div className="max-w-6xl px-6 mx-auto mt-10">
      <Image
        
        src={imageAsset}
        alt="Logo"
        width="400px"
        height="400px"
        className="relative"
      />
      </div>
      </main>
      <footer className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-center justify-between py-6 text-center border-t border-gray-100 md:flex-row">
          <p className="text-gray-500 text-md">
            Interference
            </p>
            <p className="text-xs text-gray-400/90">
           coming soon ..
            </p>
            
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
        </div>
      </footer>
      </div>
    </>
  );
};

export default Layout;
