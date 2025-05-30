import Socials from './Socials';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useContext, useState } from 'react';
import { Hamburger } from '../utils/hamburger';

const PagesHeader = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Hamburger);
  const { menuMode } = state;
  let display = 'hidden';
  let display2 = 'md:hidden';
  const handleClick = () => {
    menuMode = false;
    dispatch({
      type: menuMode ? 'MENU_MODE_ON' : 'MENU_MODE_OFF',
    });
  };
  if (menuMode === true) {
    display = '';
    display2 = '';
  } else {
    display = 'hidden';
    display2 = 'md:hidden';
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/cb.png" />
      </Head>
      <div className={'header sidebar md:flex flex-col ' + display}>
        <div className="grow">
          <div
            className={'px-4 cursor-pointer inline ' + display2}
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div className="logo text-right">
            <span className="inline-block">
              <h1 className="text-orange-700 font-bold text-2xl md:text-3xl">
                CB
              </h1>
            </span>
            <h1 id="title" className="text-white text-2xl font-bold">
              Connel Asikong
            </h1>
            <p className="text-gray-100 ">Software Engineer</p>
          </div>
          <nav className="text-center md:text-right">
            <ul>
              <li
                className={router.pathname == '/' ? 'active' : ''}
                onClick={handleClick}
              >
                <Link href="/">
                  <a className="pr-6 py-3">
                    <span>Home</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </a>
                </Link>
              </li>
              <li
                className={router.pathname == '/portfolio' ? 'active' : ''}
                onClick={handleClick}
              >
                <Link href="/portfolio">
                  <a className="pr-6 py-3">
                    <span>Portfolio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </a>
                </Link>
              </li>
              <li
                className={router.pathname == '/about' ? 'active' : ''}
                onClick={handleClick}
              >
                <Link href="/about">
                  <a className="pr-6 py-3">
                    <span>About Me</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              {/* <li
                className={router.pathname == '/contact' ? 'active' : ''}
                onClick={handleClick}
              >
                <Link href="/contact">
                  <a className="pr-6 py-3">
                    <span>Contact Me</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default PagesHeader;
