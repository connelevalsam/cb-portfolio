import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me | Connelblaze - Connel Asikong Portfolio</title>
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
            <h1 className="md:text-4xl">Waiting for you!</h1>
            <p className="text-xs md:text-lg ">
              Just send me a message or you can call and we can talk about
              almost anything!
            </p>
          </div>
        </div>
        <div className="px-10 py-12">
          <a
            href="https://twitter.com/messages/compose?recipient_id=2968131189&ref_src=twsrc%5Etfw"
            className="twitter-dm-button"
            data-screen-name="ConnelBlaze"
            data-show-count="false"
          >
            Message @ConnelBlaze
          </a>
          <p className="p-5"></p>
          <a
            href="https://telegram.me/Connelblaze"
            target="_blank"
            className=" mt-10"
          >
            <img
              width="1"
              height="1"
              src="https://agvento.com/wp-content/uploads/2020/05/telegram.svg"
              className=" w-10 h-10 inline-block"
              alt=""
              loading="lazy"
            />
            Telegram Me
          </a>

          <Script src="https://platform.twitter.com/widgets.js" />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
