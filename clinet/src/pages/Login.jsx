import React from "react";
import { Lock, Mail } from "lucide-react";
import { Button } from "@mantine/core";

function Login() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md bg-amber-800 rounded-xl p-4 shadow-md">
        <h1 className="text-center mb-4 ">Welcome Back </h1>
        <form className="space-y-4">
          <div className="flex gap-2 border-b border-gray-200">
            <Mail />
            <input
              type="email"
              className="focus:outline-none "
              placeholder="Enter Email..."
            />
          </div>
          <div className="flex gap-2 border-b border-gray-200">
            <Lock />
            <input
              type="password"
              className="focus:outline-none "
              placeholder="Enter Password..."
            />
          </div>
          <Button>login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
