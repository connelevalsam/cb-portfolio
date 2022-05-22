import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import data from '../../utils/data';

const Details = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = data.projects.find((item) => item.slug === slug);
  if (!project) {
    <div>Product not found!</div>;
  }
  if (project === undefined) {
    return;
  }
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-slate-500',
    'bg-green-500',
    'bg-amber-600',
    'bg-indigo-500',
    'bg-yellow-600',
    'bg-stone-600',
    'bg-cyan-600',
  ];
  const i = project.stacks.length;
  return (
    <>
      <Head>
        <title>
          Detail view of My Work | Connelblaze - Connel Asikong Portfolio
        </title>
        <meta name="description" content="Connel Asikong Portfolio" />
        <meta name="keywords" content="Connel, Asikong, Flutter Dev" />
        <meta name="author" content="Connel Asikong" />
      </Head>
      <Layout>
        <div className="text-center">
          <div className="text-left px-10 py-5">
            <Link href="/portfolio">
              <a className="underline">Go back</a>
            </Link>
          </div>
          <div className="m-4">
            <span className="font-bold text-2xl">{project.name}</span>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-3 px-2">
          {project.images.length > 1 ? (
            <div className="md:col-span-2 flex flex-wrap gap-4">
              {project.images.map((image) => (
                <div className="card">
                  <img
                    src={image}
                    alt={project.name}
                    className=" w-40 object-cover"
                  />
                </div>
              ))}
              <div className="py-3">
                <a href={project.mlink} target="_blank">
                  <div className="opacity-90 hover:opacity-60 bg-slate-50 top-10 flex justify-center items-center">
                    {project.type == 'site' ? 'View' : 'Download'}
                  </div>
                </a>
              </div>
            </div>
          ) : (
            <div className="md:col-span-2">
              <div className="card">
                <img
                  src={project.dp}
                  alt={project.name}
                  className="w-full object-cover"
                />
                <div className="py-3">
                  <a href={project.mlink} target="_blank">
                    <div className="opacity-90 hover:opacity-60 bg-slate-50 top-10 flex justify-center items-center">
                      {project.type == 'site' ? 'View' : 'Download'}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="">
            <h1 className="font-bold underline">Technologies:</h1>
            <div className="flex flex-wrap py-5 px-10 justify-between">
              {project.stacks.map((stack) => {
                i--;
                return (
                  <span className={colors[i] + ' rounded-full p-5 text-white'}>
                    {stack}
                  </span>
                );
              })}
            </div>
            <br />
            <div className="card mt-5 p-5">{project.description}</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Details;
