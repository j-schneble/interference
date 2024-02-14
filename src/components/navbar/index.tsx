// import Image from 'next/image'
// import imageAsset from '../../public/images/interrference.png'
// import Link from "next/link";
// import useWishlistState from "../../hooks/useWishlistState";
// import useSnipcartCount from "../../hooks/useSnipcartCount";
// import Cart from '../cart/open-cart'
// import MobileMenu from './mobile-menu';
// import { Fragment, useEffect, useState } from 'react';
// import { Menu } from '../../types';
// export default function Navbar({ menu }: { menu: Menu[] }){
//     const { hasItems } = useWishlistState();
//     const { cart } = useSnipcartCount();
//     const cartHasItems = cart.items.count !== 0;

//     const [isOpen, setIsOpen] = useState(false);
//     const openMobileMenu = () => setIsOpen(true);
//     const closeMobileMenu = () => setIsOpen(false);
  
//     useEffect(() => {
//       const handleResize = () => {
//         if (window.innerWidth > 768) {
//           setIsOpen(false);
//         }
//       };
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, [isOpen]);
  
//     return (
//       <>

// <nav className="relative flex items-center justify-between p-4 lg:px-6">
//       <div className="block flex-none md:hidden">
//         <MobileMenu />
//       </div>
//       <div className="flex w-full items-center">
//         <div className="flex w-full md:w-1/3">
//   <div className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
//   <Image
// alt="refere
// "

// className="mb-3"
// src={imageAsset}
// />

// <div className="">
//              Interference
//             </div>
//             </div>
// </div>

//         </div>


//     <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
//     <Link href="/about">
//                   <a className="p-1 text-gray-800 transition hover:text-blue-600">
//                     About
//                   </a>
//                 </Link>
//                 <Link href="/terms-of-sale">
//                   <a className="p-1 text-gray-800 transition hover:text-blue-600">
//                     Terms of Sale
//                   </a>
//                 </Link>
//       <button
//         className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
//         aria-label="User login"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           className="w-6 h-6 fill-current"
//         >
//           <path fill="none" d="M0 0h24v24H0z" />
//           <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
//         </svg>
//       </button>
//       <button
//         className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
//         aria-label="Cart"
//       >
//         {cartHasItems && (
//           <span className="absolute bg-blue-600 rounded-full w-6 h-6 top-0 right-0 -mt-1 -mr-1"></span>
//         )}
//                  <Cart />
//       </button>
//     </div>


// </nav> 
// </>
// )}
      {/* <Link href="/wishlist">
        <a
          className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
          aria-label="Wishlist"
        >
          {hasItems && (
            <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
          </svg>
        </a>
      </Link> */}

