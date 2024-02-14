// import Link from "next/link";

// const Sidebar = ({
//   isOpen,
//   toggle,
// }: {
//   isOpen: boolean;
//   toggle: () => void;
// }): JSX.Element => {
//   return (
//     <>
//       <div
//         className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
//         style={{
//           opacity: `${isOpen ? "1" : "0"}`,
//           top: ` ${isOpen ? "0" : "-100%"}`,
//         }}
//       >
//         <button className="absolute right-0 p-5" onClick={toggle}>
//         {/* Close icon */}
//           <svg xmlns="http:www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
//             <path
//               fill="currentColor"
//               d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
//             />
//           </svg>
//         </button>

//         <ul className="text-xl leading-relaxed text-center sidebar-nav">
//           <li>
//             <Link href="/about" ><p onClick={toggle}>About Us</p></Link>
//           </li>
//           <li>
//             <Link href="/services" ><p onClick={toggle}>Services</p></Link>
//           </li>
//           <li>
//             <Link href="/contacts" ><p onClick={toggle}>Contacts</p></Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
'use client'
 import Link from "next/link";
 import { Dialog, Transition } from '@headlessui/react';
 import { Fragment, useEffect, useState } from 'react';

 import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
 const Sidebar = ({
   isOpen,
   toggle,
 }: {
   isOpen: boolean;
   toggle: () => void;
 }): JSX.Element => {
   return (
     <>
       {/* <button
        onClick={toggle}
        aria-label="Open mobile menu"
        className="flex items-center justify-center text-black transition-colors border rounded-md h-11 w-11 border-neutral-200 dark:border-neutral-700 dark:text-white md:hidden"
      >
        <Bars3Icon className="h-4" />
      </button> */}
      <Transition show={isOpen}>
        <Dialog onClose={toggle} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed top-0 bottom-0 left-0 right-0 flex flex-col w-full h-full pb-6 bg-black dark:bg-black">
              <div className="p-4">
                <button
                  className="flex items-center justify-center mb-4 text-black transition-colors border rounded-md h-11 w-11 border-neutral-200 dark:border-neutral-700 dark:text-white"
                  onClick={toggle}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

             
               
                  <ul className="flex flex-col w-full">
                    <li>
                    <button  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white" onClick={toggle}>
          <Link href="/about" >
            <p>About Us</p>
            </Link>
            </button>
        </li>
        <li>
        <button className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white" onClick={toggle}>
          <Link href="/services" >
            <p>Services</p>
          </Link>
          </button>
        </li>
        <li>
        <button  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white" onClick={toggle}>
          <Link href="/contacts" >
            <p>Contacts</p>
          </Link>
          </button>
          </li>
                  </ul>
         
     </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
         {/* <button
        onClick={toggle}
        aria-label="Open mobile menu"
        className="flex items-center justify-center text-black transition-colors border rounded-md h-11 w-11 border-neutral-200 dark:border-neutral-700 dark:text-white md:hidden"
      >
        <Bars3Icon className="h-4" />
      </button>
 
     <Transition show={isOpen}>

       <Dialog onClose={toggle} className="relative z-50">
         <Transition.Child
        
           enter="transition-all ease-in-out duration-300"
           enterFrom="opacity-0 backdrop-blur-none"
           enterTo="opacity-100 backdrop-blur-[.5px]"
           leave="transition-all ease-in-out duration-200"
           leaveFrom="opacity-100 backdrop-blur-[.5px]"
           leaveTo="opacity-0 backdrop-blur-none"
         >
           <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
         </Transition.Child>
         <Transition.Child
     
           enter="transition-all ease-in-out duration-300"
           enterFrom="translate-x-[-100%]"
           enterTo="translate-x-0"
           leave="transition-all ease-in-out duration-200"
           leaveFrom="translate-x-0"
           leaveTo="translate-x-[-100%]"
         >
           <Dialog.Panel className="fixed top-0 bottom-0 left-0 right-0 flex flex-col w-full h-full pb-6 bg-white dark:bg-black">
             <div className="p-4">
               <button
                 className="flex items-center justify-center mb-4 text-black transition-colors border rounded-md h-11 w-11 border-neutral-200 dark:border-neutral-700 dark:text-white"
                 onClick={toggle}
                 aria-label="Close mobile menu"
               >
                 <XMarkIcon className="h-6" />
               </button>

  
           
                  <ul className="flex flex-col w-full">
                    
        <li>
       
          <button  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white" onClick={toggle}>
          <Link href="/about" >
            <p>About Us</p>
            </Link>
            </button>
        </li>
        <li>
        <button className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white" onClick={toggle}>
          <Link href="/services" >
            <p>Services</p>
          </Link>
          </button>
        </li>
        <li>
        <button  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white" onClick={toggle}>
          <Link href="/contacts" >
            <p>Contacts</p>
          </Link>
          </button>
        </li>
      </ul>
        
        
             </div>
            
           </Dialog.Panel>
          
         </Transition.Child>
       </Dialog>
     </Transition> */}

   </>
   );
 };

 export default Sidebar;