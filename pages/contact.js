import Head from 'next/head';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <>
      <Head>
        <title>contact me | connelblaze - connel asikong portfolio</title>
        <meta name="description" content="Get in touch with Connel Asikong — Flutter Engineer & Mobile Lead open to new opportunities." />
        <meta name="keywords" content="Connel, Asikong, Flutter Dev, Programmer portfolio" />
        <meta name="author" content="Connel Asikong" />
      </Head>
      <Layout>
        <div className="relative">
          <section id="top" className="top dark cover"></section>
          <div className="top-content">
            <h1 className="md:text-4xl">have a product problem to solve?</h1>
            <br />
            <p className="text-xs md:text-lg">
              tell me what you're working on. we can discuss the problem, the options, and whether i'm the right person to help.
            </p>
          </div>
        </div>

        <div className="px-10 py-16 max-w-xl mx-auto">

          {/* Primary CTA */}
          
            <a href="mailto:connelblaze@gmail.com"
            className="block w-full text-center bg-orange-700 text-white px-6 py-4 rounded-full hover:bg-orange-600 transition-colors text-lg font-semibold mb-6"
          >
            ✉️ send me an email
          </a>

          {/* Secondary contacts */}
          <div className="flex flex-col gap-4 mt-4">
            
            <a  href="https://www.linkedin.com/in/connel-asikong-00016181"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-600" viewBox="0 0 50 50">
                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
              </svg>
              connect on linkedIn
            </a>

            
            <a  href="https://telegram.me/Connelblaze"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors text-gray-700"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                className="w-5 h-5"
                alt="Telegram"
              />
              message on telegram
            </a>

            
            <a  href="https://x.com/ConnelBlaze"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-black" viewBox="0 0 24 24" fill="currentColor" aria-label="X" role="img">
                <path d="M18.901 1.153h3.308l-7.227 8.26 8.502 11.434h-6.657l-5.214-6.817-5.967 6.817H2.336l7.73-8.835L1.91 1.153h6.826l4.713 6.231zm-1.161 17.67h1.833L7.084 3.069H5.117z" />
              </svg>
              follow on x
            </a>
          </div>

          <p className="text-center text-gray-400 text-sm mt-10">
            based in africa · available for remote work worldwide
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Contact;