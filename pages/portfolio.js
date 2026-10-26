import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import data from '../utils/data';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>see my works | connelblaze - connel asikong portfolio</title>
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
            <h1 className="md:text-4xl">selected work, built around real problems.</h1>
            <br />
            <p className="text-xs md:text-lg ">
              a selection of digital products i've helped design, develop, or bring to market
              <br />with the problem, my role, and the work behind each one.
            </p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-2">
          {data.projects.map((project) => (
            <div className="card" key={project.id}>
              <img
                src={project.dp}
                alt={project.name}
                className="w-full h-36 sm:48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">{project.name}</span>
              </div>
              <div className="group">
                <a href={`/projects/${project.slug}`}>
                  <div className="opacity-90 hover:opacity-60 bg-slate-50 top-10 flex justify-center items-center">
                    View
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-36 px-20 mb-20">
          <h1 className="text-center text-2xl font-bold">
            other things I have done
          </h1>
          <p>
            run a blog on{' '}
            <a
              href="https://connelblaze.medium.com"
              className="text-blue-500 underline text-lg"
              target="_blank"
            >
              Medium
            </a>
          </p>
          {/* <p>
            Also on{' '}
            <a
              href="https://dev.to/connelevalsam"
              className="text-blue-500 underline text-lg"
              target="_blank"
            >
              Dev.to
            </a>
          </p> */}
          <p>
            some of my contributions on{' '}
            <a
              href="https://askubuntu.com/questions/828770/snipping-tool-in-ubuntu-16-04/896006#896006"
              className="text-blue-500 underline text-lg"
              target="_blank"
            >
              stackExchange
            </a>{' '}
            and{' '}
            <a
              href="https://stackoverflow.com/questions/59554348/how-can-i-change-drawer-icon-in-flutter/66532838#66532838"
              className="text-blue-500 underline"
              target="_blank"
            >
              stackoverflow
            </a>
          </p>
          <br />
          <object
            data="ConnelAsikongResume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              <Link
                href="/media/ConnelAsikongResume.pdf"
                target="_blank"
                className="bg-blue-600 text-white p-3 mt-10"
              >
                my resume
              </Link>
            </p>
          </object>
        </div>
      </Layout>
    </>
  );
};

export default Portfolio;
