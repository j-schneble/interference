import React from "react";
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
// import Button from "./Button";
// import { Suspense } from 'react';
import Cart from '../../cart/open-cart';
// import OpenCart from '../../cart/open-cart';
 import useWishlistState from "../../../hooks/useWishlistState";
 import useSnipcartCount from "../../../hooks/useSnipcartCount";
import Sidebar from "../sidebar";
// import { PiHeartStraight } from 'react-icons/pi'
import WishHeart from "../../icons/wishheart";
 const Navbar =() => {
     const { hasItems } = useWishlistState();
          const { cart } = useSnipcartCount();
          const cartHasItems = cart.items.count !== 0;
          const [isOpen, setIsOpen] = useState(false);
          const toggle = () => {
           setIsOpen(!isOpen);
         };
   
         useEffect(() => {
           const handleResize = () => {
             if (window.innerWidth > 768) {
               setIsOpen(false);
             }
           };
           window.addEventListener('resize', handleResize);
           return () => window.removeEventListener('resize', handleResize);
         }, [isOpen]);
     
   return (
     <>
      
       {/* <div className="flex-none block md:hidden">
         <MobileMenu menu={menu} />
       </div> */}
      <div className="fixed top-0 z-50 w-full mx-auto bg-black max-w-7xl sm:px-6 lg:px-8">
       <div className="flex items-center justify-between w-full">
         <div className="flex items-center">
          <Link href="/">
          <Logo/>
          </Link>
       
          {/* <div className='logogone'>

          </div> */}
           {/* <Link href="/" >
             <div className="logogone ">  */}
{/* 
             <Logo /> */}


      
          
          
             {/* <div className="flex-none ml-2 text-xl font-semibold uppercase md:hidden lg:block">
          Interference
             </div> */}
             {/* </div>
           </Link> */}
           {/* <p className='flex justify-center text-2xl font-bold tracking-widest text-center text-transparent move bg-clip-text bg-gradient-to-r from-gray-600 to-zinc-800/90 '>INTERFERENCE</p> */}
           <Sidebar isOpen={isOpen} toggle={toggle} />
 
           </div>
          
   
            
             {/* <ul className="hidden space-x-8 text-black md:flex gap-x-6 ">

              <li>
               <Link href="/terms-of-sale">
                  <a  className="">
                    Terms of Sale
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <a>Contacts</a>
                </Link>
              </li>
            </ul> */}
            {/* <div className="hidden md:block">
               <a href="#" className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</a>
               <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Terms of Sale</a>

             </div> */}
  
              {/* <div className="flex items-center justify-start space-x-3 md:space-x-6"> */}
              {/* <Link href="/wishlist">
                 <a
                   className="relative px-2 text-gray-800 transition rounded-md cursor-pointer hover:text-blue-600 focus:outline-none focus:text-blue-600"
                   aria-label="Wishlist"
                 >
                   {hasItems && (
                     <span className="absolute top-0 right-0 w-2 h-2 -mt-1 -mr-1 bg-red-500 rounded-full"></span>
                   )}
                   <svg
                     xmlns="http:www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     className="w-6 h-6 fill-current"
                   >
                     <path fill="none" d="M0 0H24V24H0z" />
                     <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                   </svg>
                 </a>
               </Link> */}
               <div className='flex items-center justify-end w-full space-x-6 md:w-1/3'>
                {/* <div className='hidden px-8 text-black md:flex'>
                <Link href="/terms-of-sale">
                  <a  className="">
                    Support
                  </a>
                </Link>
                </div> */}
                <div className='hidden px-2 text-black md:flex'>
 
                <Link href="/contacts">
                  <a>Support</a>
                </Link>
                </div>
                <div className='hidden px-2 md:flex '>
                <Link href="/wishlist">
                <a
                  className="relative px-2 text-gray-800 transition rounded-md cursor-pointer hover:text-blue-600 focus:outline-none focus:text-blue-600"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute top-0 right-0 w-2 h-2 -mr-1 bg-red-500 rounded-full"></span>
                  )}
               <WishHeart/>
                </a>
              </Link>
</div>
            
               
           
               
          <div className='hidden'>


               <button
                 className="px-2 transition rounded-md appearance-none cursor-pointer snipcart-customer-signin focus:outline-none focus:text-blue-600 "
                 aria-label="User login"
               >
                 <svg
                   xmlns="http:www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   className="w-5 h-5 fill-current"
                 >
                   <path fill="none" d="M0 0h24v24H0z" />
                   <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                 </svg>
               </button>
               </div>

       <button
         className="px-2 text-gray-800 transition rounded-md appearance-none cursor-pointer snipcart-checkout focus:outline-none "
         aria-label="Cart"
       >
         {cartHasItems && (
           <span className=""></span>
         )}
                  <Cart />
       </button>
       <button type="button"  className="inline-flex items-center md:hidden"
   onClick={toggle}>
   {/* Menu icon */}
     <svg xmlns="http:www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24">
          <path fill="#000000"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
     </svg>
 </button>
      
           </div>
       </div>

     </div>
 


     </>
   );
 };

 export default Navbar;






             {/* <Link href="/terms-of-sale">
                  <a className="flex p-2 text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                    Terms of Sale
                  </a>
                </Link>
                <Link href="/about">
                  <a className="flex p-2 text-center text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                    About
                  </a>
                </Link> */}
               
  
           
      {/* <button
        className="relative px-2 text-gray-800 transition rounded-md appearance-none cursor-pointer snipcart-customer-signin hover:text-blue-600 focus:outline-none focus:text-blue-600"
        aria-label="User login"
      >
        <svg
          xmlns="http:www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        </svg>
      </button> */}
   
      
          {/* <div className="flex items-center justify-between h-full"> */}
            {/* <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http:www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button> */}
            {/* <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services" >
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul> */}
            {/* <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense> */}
            {/* <div className="hidden md:block">
              <Button />
            </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
