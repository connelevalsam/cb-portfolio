import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import Header from '../components/Header';
import { Hamburger } from '../utils/hamburger';

export default function Home() {
  const { state, dispatch } = useContext(Hamburger);
  let { menuMode } = state;
  const handleClick = () => {
    menuMode = true;
    console.log('home...', menuMode);
    dispatch({
      type: menuMode ? 'MENU_MODE_ON' : 'MENU_MODE_OFF',
    });
  };
  return (
    <div className="">
      <Head>
        <title>Me | Connelblaze - Connel Asikong Portfolio</title>
        <meta name="description" content="Connel Asikong — Flutter Engineer & Mobile Lead with 7 years building mobile and web apps across healthcare, fintech, and education." />
        <meta name="keywords" content="Connel, Asikong, Flutter Dev" />
        <meta name="author" content="Connel Asikong" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="grid md:grid-cols-4">
        <Header />
        <div className="md:col-span-3 relative">
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
          <section id="top" className="one dark cover"></section>
          <header className="title">
            <h2 className="alt">
              Hi! I'm{' '}
              <strong className="text-2xl font-effect-fire">
                Connel Asikong
              </strong>
            </h2>
            <p className="text-lg font-semibold tracking-wide">
              Flutter Engineer & Mobile Lead
            </p>
            <p className='px-4'>
              I've spent 7 years turning ideas into apps people actually use —
              from healthcare and fintech to hospitality and education.
              Mobile-first, product-minded, and always focused on impact.
            </p>
            <span>
              <i>Currently open to new opportunities.</i>
            </span>
            <div className="mt-4">
              <a href="/portfolio" className="bg-orange-700 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                See My Work →
              </a>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
