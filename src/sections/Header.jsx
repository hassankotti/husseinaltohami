import React from "react";
import Navbar from "../components/Navbar";
const Header = () => {
  return (
    <section className='w-full px-6 pb-12 relative md:min-h-screen'>
      <img
        src='./src/assets/beams_dark.jpg'
        alt=''
        className='absolute md:top-1/2 left-1/2 max-w-none -translate-x-1/2 md:-translate-y-1/2 object-cover h-full'
        width='100%'
      />
      <img
        src='./src/assets/beams.jpeg'
        alt=''
        className='absolute md:top-1/2 left-1/2 max-w-none -translate-x-1/2 md:-translate-y-1/2 object-cover h-full dark:hidden'
        width='100%'
      />
      <div className='absolute inset-0 bg-[url(./src/assets/grid.svg)] dark:bg-bgGridSlate  bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(0deg,black,rgba(255,255,255,0))]'></div>

      <div className='mx-auto max-w-7xl'>
        <Navbar />
        {/*-- Main Hero Content -- */}
        <div className='container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center relative flex flex-col items-center'>
          <h1 className='text-5xl font-extrabold leading-10 tracking-tight text-left text-slate-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl'>
            <span className='inline md:block dark:text-slate-100 leading-loose'>
              Hey there!{" "}
            </span>{" "}
            <span className='relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block'>
              I'm Si7s
            </span>
          </h1>
          <div className='mx-auto mt-5 text-slate-500 dark:text-slate-300 md:mt-12 md:max-w-lg md:text-center lg:text-2xl'>
            a visual designer specializing in UI/UX based in the Saudi Arabia.
          </div>
          <div className='flex flex-col items-center mt-12 text-center'>
            <span className='relative inline-flex w-full md:w-auto'>
              <a
                href='#projects'
                type='button'
                className='inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
                Show Me More
              </a>
            </span>
          </div>
        </div>
        {/*-- End Main Hero Content --*/}
      </div>
    </section>
  );
};

export default Header;
