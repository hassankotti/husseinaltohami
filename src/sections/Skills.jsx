import React from "react";
const navigation = [
  { name: "Adobe AI", href: "#", current: true },
  { name: "Adobe Photoshop", href: "#", current: false },
  { name: "Adobe XD", href: "#", current: false },
  { name: "Figma", href: "#", current: false },
];

const Skills = () => {
  return (
    <section className='py-12 sm:py-16 bg-white dark:bg-slate-900'>
      <div className='max-w-7xl px-10 mx-auto sm:text-center'>
        <p className='text-blue-500 font-medium uppercase dark:text-slate-300'>
          Our Application Integrations
        </p>
        <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 dark:text-slate-200'>
          Connect with Your Favorite Apps.
        </h2>
        <p className='mt-4 text-slate-500 text-base sm:text-xl lg:text-2xl dark:text-slate-400'>
          We've built integrations with some of your favorite services.
          <br className='lg:hidden hidden sm:block' /> Check'em out below 👇
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16'>
          <div className='rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-slate-100 dark:border-slate-800 dark:bg-slate-700'>
            <svg
              className='w-32 h-auto text-orange-500'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid'>
              <path
                fill='currentColor'
                d='M0 .401v31.198h32V.401zm1.333 1.333h29.333v28.531H1.333zm9.766 16.334l-1.057 3.995c-.021.115-.063.135-.193.135H7.891c-.135 0-.156-.042-.135-.193l3.786-13.26c.068-.24.109-.453.13-1.115c0-.089.047-.13.115-.13h2.792c.089 0 .135.021.156.13l4.245 14.396c.026.109 0 .172-.109.172h-2.198c-.115 0-.177-.026-.198-.115l-1.104-4.016h-4.276zm3.719-2.167c-.375-1.474-1.255-4.703-1.583-6.266h-.026c-.281 1.557-.99 4.198-1.536 6.266zm6-7.411c0-.859.594-1.365 1.365-1.365c.813 0 1.365.552 1.365 1.365c0 .88-.573 1.365-1.391 1.365c-.797 0-1.344-.484-1.344-1.365zm.151 3.031c0-.104.042-.146.151-.146h2.094c.12 0 .161.042.161.156v10.526c0 .109-.021.151-.156.151h-2.063c-.135 0-.177-.063-.177-.172V11.52z'
              />
            </svg>
            <p className='font-bold mt-4 dark:text-slate-300'>
              Adobe Illustrator
            </p>
            <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
              Connect to 1,000+ apps
            </p>
          </div>
          <div className='rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-slate-100 dark:border-slate-800 dark:bg-slate-700'>
            <svg
              className='w-32 h-auto text-blue-500'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid'>
              <path
                fill='currentColor'
                d='M0 .401v31.198h32V.401zm1.333 1.333h29.333v28.531H1.333zm6.401 5.974c0-.089.188-.156.297-.156a76.42 76.42 0 0 1 3.438-.068c3.698 0 5.135 2.026 5.135 4.62c0 3.391-2.458 4.844-5.469 4.844c-.51 0-.682-.026-1.036-.026v5.125c0 .109-.042.156-.151.156H7.885c-.109 0-.151-.042-.151-.151zm2.365 7.084c.307.021.552.021 1.083.021c1.557 0 3.026-.552 3.026-2.661c0-1.693-1.052-2.552-2.833-2.552c-.526 0-1.031.021-1.276.042zm11.479-1.589c-1.057 0-1.411.531-1.411.969c0 .484.24.813 1.651 1.542c2.089 1.016 2.75 1.979 2.75 3.411c0 2.13-1.63 3.276-3.828 3.276c-1.167 0-2.161-.245-2.734-.573c-.083-.042-.104-.109-.104-.219v-1.958c0-.13.063-.177.151-.109a4.9 4.9 0 0 0 2.682.792c1.057 0 1.495-.438 1.495-1.036c0-.484-.307-.901-1.646-1.604c-1.896-.906-2.688-1.828-2.688-3.37c0-1.719 1.344-3.146 3.672-3.146c1.146 0 1.953.177 2.396.37c.109.068.13.177.13.266v1.828c0 .109-.068.177-.198.13c-.594-.349-1.469-.573-2.323-.573z'
              />
            </svg>
            <p className='font-bold mt-4 dark:text-slate-300'>
              Adobe Photoshop
            </p>
            <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
              Messaging Platform
            </p>
          </div>
          <div className='rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-slate-100 dark:border-slate-800 dark:bg-slate-700'>
            <svg
              className='w-32 h-auto text-purple-500'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid'>
              <path
                fill='currentColor'
                d='M26.333.401H5.666A5.66 5.66 0 0 0-.001 6.068v19.864a5.66 5.66 0 0 0 5.667 5.667h20.667A5.66 5.66 0 0 0 32 25.932V6.068A5.66 5.66 0 0 0 26.333.401zm4.318 25.011a4.825 4.825 0 0 1-4.823 4.853H6.172a4.846 4.846 0 0 1-4.839-4.839V6.573a4.846 4.846 0 0 1 4.839-4.839h19.64a4.84 4.84 0 0 1 4.839 4.839zM12.651 15l3.735 7.172c.068.109.027.213-.079.213h-2.323c-.145 0-.213-.036-.276-.172c-.853-1.76-1.724-3.52-2.615-5.411h-.025a210.669 210.669 0 0 1-2.537 5.427c-.061.104-.129.145-.239.145H6.093c-.135 0-.145-.109-.077-.187l3.651-6.959l-3.531-7.041c-.084-.109 0-.188.077-.188h2.292c.135 0 .188.027.24.145a272.653 272.653 0 0 1 2.495 5.349h.025c.776-1.76 1.631-3.588 2.453-5.333c.068-.109.109-.177.24-.177h2.145c.109 0 .151.084.084.188zm4.39 2.172c0-3.104 2.063-5.532 5.344-5.532c.281 0 .427 0 .693.027V8.136c0-.084.067-.136.135-.136h2.104c.109 0 .136.041.136.104v12.245c0 .359 0 .812.068 1.301c0 .084-.027.109-.109.152a7.967 7.967 0 0 1-3.412.771c-2.896.015-4.959-1.771-4.959-5.401zm6.038-3.412a2.054 2.054 0 0 0-.772-.135c-1.681 0-2.853 1.296-2.853 3.443c0 2.453 1.197 3.437 2.708 3.437c.317 0 .667-.036.917-.145z'
              />
            </svg>
            <p className='font-bold mt-4 dark:text-slate-300'>Adobe XD</p>
            <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
              Customer Relations
            </p>
          </div>
          <div className='rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-slate-100 dark:border-slate-800 dark:bg-slate-700'>
            <svg
              className='w-32 h-auto text-orange-500'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid'>
              <g fill='none'>
                <g clip-path='url(#svgIDa)'>
                  <path
                    fill='currentColor'
                    fill-rule='evenodd'
                    d='M8.415 0C5.968 0 4 2.053 4 4.568c0 1.529.728 2.887 1.847 3.716A4.613 4.613 0 0 0 4 12c0 1.53.728 2.887 1.847 3.716A4.613 4.613 0 0 0 4 19.432C4 21.947 5.968 24 8.415 24c2.446 0 4.415-2.053 4.415-4.568V15.57a4.307 4.307 0 0 0 2.755.999C18.032 16.568 20 14.515 20 12a4.61 4.61 0 0 0-1.847-3.716A4.613 4.613 0 0 0 20 4.568C20 2.053 18.032 0 15.585 0h-7.17ZM5.659 4.568c0-1.591 1.242-2.865 2.756-2.865h2.755v5.73H8.415c-1.514 0-2.756-1.275-2.756-2.865Zm9.926 2.864H12.83v-5.73h2.755c1.515 0 2.756 1.275 2.756 2.866c0 1.59-1.241 2.864-2.756 2.864ZM5.66 12c0-1.59 1.242-2.865 2.756-2.865h2.755v5.73H8.415C6.9 14.865 5.659 13.59 5.659 12Zm7.17 0c0-1.59 1.242-2.865 2.756-2.865c1.515 0 2.756 1.274 2.756 2.865c0 1.59-1.241 2.865-2.756 2.865c-1.514 0-2.755-1.274-2.755-2.865Zm-7.17 7.432c0-1.59 1.242-2.864 2.756-2.864h2.755v2.864c0 1.591-1.24 2.865-2.755 2.865c-1.514 0-2.756-1.274-2.756-2.865Z'
                    clip-rule='evenodd'
                  />
                </g>
                <defs>
                  <clipPath id='svgIDa'>
                    <path fill='#fff' d='M0 0h24v24H0z' />
                  </clipPath>
                </defs>
              </g>
            </svg>
            <p className='font-bold mt-4 dark:text-slate-300'>Figma</p>
            <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
              Customer Messaging
            </p>
          </div>
        </div>
        <a
          href='#_'
          className='px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500'>
          View All Integrations
        </a>
      </div>
    </section>
  );
};

export default Skills;
