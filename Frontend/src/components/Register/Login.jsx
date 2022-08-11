import React from "react";
import { Link } from "react-router-dom";
import google from "../../assets/images/icons/google.svg";

export const Login = () => {
  return (
    <div>
      <div class="min-h-screen bg-purple-400 flex justify-center items-center">
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
              Login Account
            </h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Login your Account with multiple Options.
            </p>
          </div>
          <div class="space-y-4">
            <input
              type="text"
              placeholder="Email Address"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              type="text"
              placeholder="Password"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          <div class="flex items-center justify-between mt-5">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                placeholder="Your password"
                class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
              />
              <label
                for="remember-me"
                class="block ml-2 text-sm text-neutral-600"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>
          <div class="text-center mt-6">
            <button class="py-3 w-64 text-bold text-primary rounded-2xl border focus:bg-gray-100 ">
              Login
            </button>
            <p class="mt-4 text-sm">
              New user for Register?{" "}
              <Link to="/register">
                <span class="underline cursor-pointer"> Register</span>
              </Link>
            </p>
            <div className="mt-4 rounded-sm">
              <button
                type="submit"
                class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <div class="flex items-center justify-center">
                  <img className="w-6" src={google} alt="" srcset="" />
                  <span class="ml-4"> Log in with Google</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
