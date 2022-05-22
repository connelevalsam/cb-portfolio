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
              Hi! My name is Connel and I found out I love building things for
              other people to use. My interest started with Web and moved to
              Mobile and right now I have interest in Web3.
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-1 bg-amber-400">
          <div className="flex flex-wrap justify-center items-center content-center col-span-2">
            <div className="thought">
              Started professionally 4 years ago at a startup. After My first
              job, I had worked at 3 other companies and startups and right now
              I just work and freelance. I studied Computer Science.
            </div>
            <div className="thought">
              Started teaching various programming languages as well from
              2016-2019. Worked in Jensiv LTD as Lead Mobile Developer, then
              moved to Freshtooth as Flutter Developer, Currently working at
              Kodex.
            </div>
            <div className="thought">
              Started writing blog posts on Medium in 2017, written almost 8 so
              far. Asked and answered quesions on the different Stackoverflow
              branches.
            </div>
            <div className="thought">
              My work has been considered very impressive by previous employers
              and clients all over the world. and I am confident that I live up
              to the hype. To me, I believe I can be of help to anyone even
              though I might not be needed to code.
            </div>
            <div className="thought">
              Currently a Tutor at Kodex and freelancer.
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
                  React
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
                  <span className="p-signs">&#11040;</span> Contentful
                </a>
                <a href="#" className="">
                  <span className="p-signs">&#11040;</span> Netlify
                </a>
              </div>
              Check out some of the things I've built{' '}
              <a href="portfolio.html" className="underline text-blue-600">
                Here.
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
