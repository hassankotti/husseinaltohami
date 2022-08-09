import React from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../components/Logo";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Education", href: "#", current: true },
  { name: "Experience", href: "#", current: false },
  { name: "Skills", href: "#", current: false },
  { name: "Projects", href: "#projects", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as='nav' className='dark:bg-slate-900'>
      {({ open }) => (
        <div className='relative z-50 h-24 select-none'>
          <div className='container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-0 border-slate-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0'>
            <div className='flex items-center justify-start w-1/4 h-full pr-4'>
              <a href='#_' className='inline-block py-4 md:py-0'>
                <span className='p-1 text-xl font-black leading-none text-slate-900'>
                  <Logo />
                </span>
              </a>
            </div>
            <div className='fixed hidden top-0 left-0 items-start  w-full h-full p-4 text-sm bg-slate-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex'>
              <div className='flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row'>
                <div className='md:hidden'>
                  <Logo />
                </div>
                <div className='flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center'>
                  {navigation.map((item) => (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? "text-indigo-500 " : "text-slate-600 ",
                        "inline-block w-full py-2 mx-0 ml-6 font-medium text-left hover:text-indigo-700 dark:text-white text-slate-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0'>
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <div className='absolute right-0 flex items-center justify-center space-x-2'>
              {/* Mobile theme button*/}
              <ThemeToggle />
              <div className=' flex-col items-center justify-center w-10 h-10 bg-white dark:bg-slate-700 rounded-full cursor-pointer md:hidden hover:bg-slate-100'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-slate-400 hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden bg-slate-50 dark:bg-slate-900 border dark:border-slate-800 rounded'>
            <div className=' pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-indigo-500 dark:text-indigo-100"
                      : "text-slate-700 dark:text-slate-100",
                    "block px-3 py-2  text-base font-medium hover:text-white dark:text-slate-100 hover:bg-indigo-500"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
