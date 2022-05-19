import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
      <title>Me | Connelblaze - Connel Asikong Portfolio</title>
        <meta name="description" content="ConnelAsikong Portfolio" />
        <meta name="keywords" content="Connel, Asikong, Flutter Dev" />
        <meta name='author' content='Connel Asikong' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="grid md:grid-cols-4">
        <Header />
        <div className="md:col-span-3 relative">
          <div className="px-4 cursor-pointer md:hidden inline" id="burger">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
          </div>
          <section id="top" className="one dark cover"></section>
          <header className="title">
              <h2 className="alt">Hi! I'm <strong className="text-2xl">Connel Asikong</strong>, a Software Engineer.</h2>
              <p>Ranging from: Mobile Apps, Web Apps, Websites, SEO and Project Consultant.</p>
              <span><i>To begin. Begin</i></span>
          </header>
        </div>
      </div>
      
    </div>
  )
}
