import React from "react";
import { Lock, Mail } from "lucide-react";
import { Button } from "@mantine/core";
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full rounded-2xl p-6 shadow-md bg-white"
      >
        <h1 className="text-center text-2xl font-bold mb-4">Welcome Back </h1>
        <form className="space-y-6 w-full">

          <div className="flex gap-2 items-center pb-2 border-b border-gray-200">
            <Mail className="text-gray-500" size={20} />
            <input
              type="email"
              className="focus:outline-none "
              placeholder="Enter Email..."
            />
          </div>

          <div className="flex gap-2 border-b border-gray-200">
            <Lock className="text-gray-500" size={20} />
            <input
              type="password"
              className="focus:outline-none "
              placeholder="Enter Password..."
            />
          </div>
          <Button fullWidth>login</Button>

          <p className="text-center text-gray-800">
            Don't have an account?{' '}
            <Link to="/register" className="text-sky-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
