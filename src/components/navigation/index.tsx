"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {

      
      
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar  />
    </>
  );
};


export default Navigation;