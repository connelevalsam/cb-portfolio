import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Header = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/cb.png" />
      </Head>
      <div className="md:col-span-1 h-screen header hidden md:flex flex-col">
        <div className="md:flex flex-col">
          <div className="px-4 cursor-pointer md:hidden inline" id="burger2">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div className="logo text-right">
            <span class="inline-block">
              <h1 class="text-orange-700 font-bold text-2xl md:text-3xl">CB</h1>
            </span>
            <h1 id="title" className="text-white text-2xl font-bold">
              Connel Asikong
            </h1>
            <p className="text-gray-100 ">Software Engineer</p>
          </div>
          <nav className="text-center md:text-right">
            <ul>
              <li className={router.pathname == '/' ? 'active' : ''}>
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
              <li>
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
              <li>
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
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;