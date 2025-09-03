import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { X, Menu } from "lucide-react";


function Navbar() {

  // const [isOpen , setIsOpen]=useState(false);

  // const changeIcon = ()=>{
  //   setIsOpen(!isOpen)
  // };
  // one click
  // <button  className="" onClick={changeIcon}> {isOpen ? <X /> : <Menu />} </button>
      
  return (
    <nav className="h-15 ">
      <div className="flex items-center justify-between mx-auto">
        <h1 className="text-2xl">NEWSAI</h1>

        <ul className="flex gap-2">
          {["HOME", "CATEGORT", "CHANNELS", "ABOUT"].map((iteam) => (
            <li key={iteam}>
              <Link to={`/${iteam.toLocaleLowerCase}`}>{iteam} </Link>
            </li>
          ))}
        </ul>
        <div className="fiex space-x-4 justify-center items-center">
          <Link to="/login"><Button variant="white">Login</Button></Link>
          <Link to="/register"><Button variant="white">Register</Button></Link>  
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
