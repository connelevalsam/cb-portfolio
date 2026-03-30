import Head from 'next/head';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me | Connelblaze - Connel Asikong Portfolio</title>
        <meta name="description" content="Get in touch with Connel Asikong — Flutter Engineer & Mobile Lead open to new opportunities." />
        <meta name="keywords" content="Connel, Asikong, Flutter Dev, Programmer portfolio" />
        <meta name="author" content="Connel Asikong" />
      </Head>
      <Layout>
        <div className="relative">
          <section id="top" className="top dark cover"></section>
          <div className="top-content">
            <h1 className="md:text-4xl">Let's Talk</h1>
            <p className="text-xs md:text-lg">
              I'm currently open to new opportunities — full-time, contract, or freelance.
              Whether you have a project in mind or just want to connect, my inbox is open.
            </p>
          </div>
        </div>

        <div className="px-10 py-16 max-w-xl mx-auto">

          {/* Primary CTA */}
          
            <a href="mailto:connelblaze@gmail.com"
            className="block w-full text-center bg-orange-700 text-white px-6 py-4 rounded-full hover:bg-orange-600 transition-colors text-lg font-semibold mb-6"
          >
            ✉️ Send me an Email
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
              Connect on LinkedIn
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
              Message on Telegram
            </a>

            
            <a  href="https://twitter.com/ConnelBlaze"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-sky-500" viewBox="0 0 50 50">
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
              </svg>
              Follow on Twitter
            </a>
          </div>

          <p className="text-center text-gray-400 text-sm mt-10">
            Based in Africa · Available for remote work worldwide
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Contact;