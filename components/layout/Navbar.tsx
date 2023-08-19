/* eslint-disable @next/next/no-img-element */
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { useAppSelector } from "../../redux/hook";
import {AiFillShopping, AiFillContacts, AiFillExclamationCircle} from 'react-icons/ai'
const Navbar = () => {
  const carts = useAppSelector(state=>state.cart.products)
  return (
    <div className="relative bg-gray-100 dark:bg-gray-900">
      <nav
        x-data="{ isOpen: false }"
        className="relative bg-white shadow dark:bg-gray-800"
      >
        <div className="container mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Logo/>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              
              <Link
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="/"
              >
                <span className="inline-block"><AiFillShopping style={{display:'inline'}}/> Shop</span>
              </Link>
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                <span className="inline-block"><AiFillContacts style={{display:'inline'}}/> Contact</span>
              </a>
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                <span className="inline-block"><AiFillExclamationCircle style={{display:'inline'}}/> About</span>
              </a>
              <Link
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="/cart"
              >
            <svg className="h-6 w-6 leading-none text-gray-300 stroke-current inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
             </svg>
             <span className="pl-1 text-gray-500 text-md inline fill-stone-950 ">{carts.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
