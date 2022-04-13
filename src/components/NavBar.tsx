import React, {useState} from 'react'

// import components
import Button from './Button'

// import assert
import IcChevronDown from '../assets/Vector 3.png'

const NavBar: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(true);
 
  function mobileNavBarHandler() {
    setShowMobileNav(showMobileNav => !showMobileNav);
  }

  return (
  <nav className="bg-white-100">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
    <div className="relative flex items-center justify-between h-16 sm:mb-28">
      <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button onClick={mobileNavBarHandler} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-2 rounded-xl flex items-center justify-center sm:items-stretch sm:justify-start">
          <h1 className="text-md md:text-xl mb-0">AR SHARKIR</h1>
      </div>

      <ul className="hidden sm:flex p-2 m-0 bg-white rounded-xl items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="text-sm mr-2">Product</span>
          <img src={IcChevronDown} alt="icon" className="justify-self-end" />
        </div>
        <div className="flex items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="text-sm mr-2">Template</span>
          <img src={IcChevronDown} alt="icon" className="justify-self-end" />
        </div>
        <div className="flex items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="text-sm mr-2">Blog</span>
        </div>
        <div className="flex items-center p-2 pl-8 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="text-sm mr-2">Pricing</span>
        </div>
      </ul>

      <div className="hidden inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Button buttonStyle="justify-center w-32 h-12 font-medium rounded-md text-black bg-white-600 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500" buttonText="Sign in"/>
        <Button buttonStyle="justify-center w-32 h-12 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttonText="Start Free"/>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
    <div className={showMobileNav ? '' : 'hidden'}>
    <div className="px-2 pt-2 pb-3 space-y-1">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <div className="flex items-center bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
          <span className="text-sm mr-2">Product</span>
          <img src={IcChevronDown} alt="icon" className="justify-self-end" />
        </div>
        <div className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          <span className="text-sm mr-2">Template</span>
          <img src={IcChevronDown} alt="icon" className="justify-self-end" />
        </div>
        <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          <span className="text-sm mr-2">Blog</span>
        </div>
        <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          <span className="text-sm mr-2">Pricing</span>
        </div>
    </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar