import React from "react";

const Projects = () => {
  return (
    <section
      className='relative w-full bg-white dark:bg-slate-900'
      id='#projects'>
      <div className='absolute w-full h-32 bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900'></div>
      <div className='relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl'>
        <h1 className='mb-1 text-4xl font-extrabold leading-none text-slate-900 dark:text-slate-50 lg:text-5xl xl:text-6xl sm:mb-3'>
          <a href='#'>Projects</a>
        </h1>
        <p className='text-lg font-medium text-slate-500 sm:text-2xl dark:text-slate-400'>
          Designs and layouts to help you with your app.
        </p>
        <div className=' grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16'>
          <div className='relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4'>
            <a
              href='#'
              className='block w-full transition duration-300 ease-in-out transform bg-center  bg-cover h-96 hover:scale-110 bg-[url(https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg)]'></a>
            <div className='relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7'>
              <a
                href='#'
                className='inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white'>
                Resources
              </a>
              <h2 className='mb-5 text-5xl font-bold'>
                <a href='#'>Refreshing Designs</a>
              </h2>
              <p className='mb-2 text-lg font-normal text-purple-100 opacity-100'>
                Quench satisfying designs to help you stir up emotion and tell a
                story.
              </p>
            </div>
          </div>

          <div className='relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4'>
            <a
              href='#'
              className='block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110 bg-[url(https://cdn.devdojo.com/images/may2021/orange.jpg)]'></a>
            <div className='relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7'>
              <a
                href='#'
                className='inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white'>
                Lifestyle
              </a>
              <h2 className='mb-5 text-5xl font-bold'>
                <a href='#'>Healthier Lifestyle</a>
              </h2>
              <p className='mb-2 text-lg font-normal text-blue-100 opacity-100'>
                Living a healthier lifestyle will help with your productivity
                and your mind-set.
              </p>
            </div>
          </div>

          <div className='relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col'>
            <a
              href='#'
              className='block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110 bg-[url()]'
              style={{
                backgroundImage:
                  "url('https://cdn.devdojo.com/images/may2021/gbc.jpg')",
              }}></a>
            <div className='relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7'>
              <a
                href='#'
                className='inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white'>
                Entertainment
              </a>
              <h2 className='mb-5 text-5xl font-bold'>
                <a href='#'>Gaming Evolution</a>
              </h2>
              <p className='mb-2 text-lg font-normal opacity-100 text-yellow-50'>
                Learn about the evolution of gaming and how it started a
                revolution.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 col-span-12 gap-7'>
            <div className='flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4'>
              <a
                href='#'
                className='block transition duration-200 ease-out transform hover:scale-110'>
                <img
                  className='object-cover w-full shadow-sm max-h-56 aspect-video'
                  src='https://cdn.devdojo.com/images/may2021/workstation.jpg'
                />
              </a>
              <div className='relative flex flex-col items-start px-6 bg-white dark:bg-slate-800 border border-t-0 border-slate-200 dark:border-slate-700 py-7 rounded-b-2xl'>
                <div className='bg-indigo-400 absolute top-0 -mt-3  items-center px-3 py-1.5 leading-none w-auto rounded-full text-xs font-medium uppercase text-white  inline-block'>
                  <span>Inspiration</span>
                </div>
                <h2 className='text-base font-bold sm:text-lg md:text-xl dark:text-slate-50'>
                  <a href='#'>Best Workstations of the Year</a>
                </h2>
                <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
                  Check out these inspiring workstations to get ideas on how to
                  level-up your workstation.
                </p>
              </div>
            </div>

            <div className='flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4'>
              <a
                href='#'
                className='block transition duration-200 ease-out transform hover:scale-110'>
                <img
                  className='object-cover w-full shadow-sm max-h-56 aspect-video'
                  src='https://cdn.devdojo.com/images/may2021/snacks.jpg'
                />
              </a>
              <div className='relative flex-col items-start px-6 bg-white dark:bg-slate-800 border border-t-0 border-slate-200 dark:border-slate-700  py-7 rounded-b-2xl'>
                <div className='bg-red-400 absolute top-0 -mt-3 items-center px-3 py-1.5 leading-none w-auto  rounded-full text-xs font-medium uppercase text-white inline-block'>
                  <span>Food</span>
                </div>
                <h2 className='text-base font-bold sm:text-lg md:text-xl dark:text-slate-50'>
                  <a href='#'>Eating for Productivity</a>
                </h2>
                <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
                  Learn how to be more disciplined in your diet and how you can
                  eat to maximize productivity.
                </p>
              </div>
            </div>

            <div className='flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4'>
              <a
                href='#'
                className='block transition duration-200 ease-out transform hover:scale-110'>
                <img
                  className='object-cover w-full shadow-sm max-h-56 aspect-video'
                  src='https://cdn.devdojo.com/images/may2021/book-design.jpg'
                />
              </a>
              <div className='relative flex flex-col items-start px-6 bg-white dark:bg-slate-800 border border-t-0 border-slate-200 dark:border-slate-700  py-7 rounded-b-2xl'>
                <div className='bg-purple-500 absolute top-0 -mt-3 items-center px-3 py-1.5 leading-none w-auto rounded-full text-xs font-medium uppercase text-white inline-block'>
                  <span>Resources</span>
                </div>
                <h2 className='text-base font-bold sm:text-lg md:text-xl dark:text-slate-50'>
                  <a href='#'>A Design Mind-set</a>
                </h2>
                <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
                  What does it mean to have a design mind-set? Learn how to
                  improve your eye for design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
