import Head from 'next/head';
import Layout from '../components/Layout';

const About = () => {
  return (
    <>
      <Head>
        <title>About Me | Connelblaze - Connel Asikong Portfolio</title>
        <meta name="description" content="Connel Asikong Portfolio" />
        <meta
          name="keywords"
          content="Connel, Asikong, Flutter Dev, Programmer portfolio"
        />
        <meta name="author" content="Connel Asikong" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <div className="relative">
          <section id="top" className="top dark cover"></section>
          <div className="top-content">
            <h1 className="md:text-4xl">About</h1>
            <p className="text-xs md:text-lg ">
              Flutter Engineer & Mobile Lead. 7 years building apps that ship, scale, and matter.
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-1 bg-amber-400">
          <div className="flex flex-wrap justify-center items-center content-center col-span-2">
            <div className="thought">
              I've been building software professionally for 7 years. Starting
              with web, going deep into mobile, and leading teams across
              healthcare, fintech, hospitality, and education. I studied
              Computer Science and have shipped apps to both the App Store and
              Google Play.
            </div>
            <div className="thought">
              I've worked as Lead Mobile Developer at Jensiv, Flutter Developer
              at Freshtooth, Technical Tutor & Developer at Kodex, Mobile Lead
              at AuxilloRX, and currently contract developer at Swiftier and
              co-founder at Nawe — where I also built and run NaweSchools,
              training 1,000+ developers.
            </div>
            <div className="thought">
              Beyond code, I run the BitDev and FlutterIoT communities,
              speak at tech meetups, and write on Medium and Dev.to. I am one of the persons that started the Anambra Techies community. I care about
              growing the next generation of African developers as much as I
              care about shipping great products.
            </div>
          </div>
          <div className="text-center md:text-left">
            <img src="/img/cb_avatar.png" alt="" />
            <div>
              <ul>
                <span className="text-lg">
                  Here are a few technologies I've been working with recently:
                </span>
                <li className="bg-red-500 rounded-full p-3 my-2 text-white flex justify-center">
                  Flutter
                </li>
                <li className="bg-green-500 rounded-full p-3 my-2 text-white flex justify-center">
                  JavaScript (ES6+)
                </li>
                <li className="bg-blue-500 rounded-full p-3 my-2 text-white flex justify-center">
                  NextJS
                </li>
                <li className="bg-cyan-500 rounded-full p-3 my-2 text-white flex justify-center">
                  Laravel
                </li>
                <li className="bg-indigo-500 rounded-full p-3 my-2 text-white flex justify-center">
                  MySQL
                </li>
                <li className="bg-teal-500 rounded-full p-3 my-2 text-white flex justify-center">
                  Firebase
                </li>
              </ul>
              <br />
              <div className="px-4 bg-slate-700 text-gray-400 flex flex-wrap justify-evenly">
                <a href="#" className="">
                  <span className="p-signs">&#11040;</span> Git
                </a>
                <a href="#" className="">
                  <span className="p-signs">&#11040;</span> GitHub
                </a>
                <a href="#" className="">
                  <span className="p-signs">&#11040;</span> Agile
                </a>
                <a href="#" className="">
                  <span className="p-signs">&#11040;</span> AI
                </a>
                <a href="#" className="">
                  <span className="p-signs">&#11040;</span> APIs
                </a>
              </div>
              Check out some of the things I've built{' '}
              <a href="/portfolio" className="underline text-blue-600">
                Here.
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About;
