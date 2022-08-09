import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline"
import useDarkMode from "../hooks/useDarkMode";
import { Switch } from '@headlessui/react'

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false)
  const [colorTheme, setTheme] = useDarkMode()
  const toggleTheme = () => {
    colorTheme === "light" ? "dark" : "light"
    setTheme(colorTheme)
  }
  return (
    <button onClick={() => { toggleTheme() }}>
      <Switch
        aria-label='Color-Mode'
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? '' : ''}
         flex items-center dark:border-slate-400 justify-center transition duration-150 ease-in-out  hover:text-indigo-500 focus:outline-none  p-2 text-slate-400  rounded-full  focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-white dark:hover:text-slate-500 focus:text-slate-500`}
      >
        <span
          aria-hidden="true"
          className={`
            pointer-events-none h-[24px] w-[24px] transform rounded-full  text-white transition duration-200 ease-in-out flex items-center justify-center`}
        >
          {
            colorTheme === "light" ?
              (
                <SunIcon
                  className='w-6 h-6 text-yellow-500'
                />
              ) : (
                <MoonIcon
                  className='w-6 h-6 text-slate-900'
                />

              )
          }
        </span>
      </Switch>
    </button >
  );
};
export default ThemeToggle;




