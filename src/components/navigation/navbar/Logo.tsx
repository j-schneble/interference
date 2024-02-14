"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import imageAsset from '../../../public/images/inter.png'
const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

 



  return (
    <>
      <Link href="/" >
        {/* <a style={{ display: showButton ? "none" : "block" }}> */}


        <Image
        
          src={imageAsset}
          alt="Logo"
          width={width < 1024 ? "85" : "90"}
          height={width < 1024 ? "85" : "90"}
          className="relative"
        />

            {/* </a> */}
      </Link>
      
       <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button />
      </div> 
    </>
  );
};

export default Logo;