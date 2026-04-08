import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import blogsData from '../utils/blogs';

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs | Connelblaze - Connel Asikong Portfolio</title>
        <meta name="description" content="Connel Asikong Portfolio" />
        <meta
          name="keywords"
          content="Connel, Asikong, Flutter Dev, Programmer portfolio"
        />
        <meta name="author" content="Connel Asikong" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@400;600;700;800;900&family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div className="relative">
          <section id="top" className="top dark cover"></section>
          <div className="top-content">
            <h1 className="md:text-4xl">Blogs</h1>
            <p className="text-xs md:text-lg ">
              I write about my experiences as a developer, the tech industry, and
              anything else that comes to mind.
            </p>
          </div>
        </div>
        <div className="mt-20 px-4 md:px-20 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">All my blog posts</h2>
            <p className="mt-4 text-gray-300 text-sm md:text-base">
              I only have two posts right now, so here are the latest reads in a clean, easy layout.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blogsData.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`}>
                <div className="group rounded-3xl border border-gray-800 bg-slate-900 p-6 shadow-xl transition hover:-translate-y-1 cursor-pointer h-full">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                      {post.tag}
                    </span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{post.title}</h3>
                  <p className="mt-4 text-gray-300 leading-7">{post.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-orange-500 group-hover:gap-3 transition-all">
                    <span className="font-semibold">Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Blogs;