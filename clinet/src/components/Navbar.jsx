import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  // const [isOpen , setIsOpen]=useState(false);

  // const changeIcon = ()=>{
  //   setIsOpen(!isOpen)
  // };
  // one click
  // <button  className="" onClick={changeIcon}> {isOpen ? <X /> : <Menu />} </button>

  return (
    <nav className="bg-opacity-80 bg-white h-14 border-b border-b-gray-200 backdrop-blur-md p-4 text-black sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4 relative">
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold ml-2"
        >
          NewsAI
        </motion.h1>

        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
            { name: "World", path: "/world" },
            { name: "About", path: "/about" },
          ].map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
              key={item.name}
              className="hover:text-gray-700 text-sm"
            >
              <Link
                className="text-md font-semibold tracking-wider"
                to={item.path}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="white" size="xs">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="white" size="xs">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
