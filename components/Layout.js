import PagesHeader from './PagesHeader';
import { useContext, useState } from 'react';
import { Hamburger } from '../utils/hamburger';

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Hamburger);
  const { menuMode } = state;
  const handleClick = () => {
    menuMode = true;
    dispatch({
      type: menuMode ? 'MENU_MODE_ON' : 'MENU_MODE_OFF',
    });
  };
  return (
    <div className="">
      <PagesHeader />
      <main className="main">
        <div
          className="px-4 cursor-pointer md:hidden inline"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
