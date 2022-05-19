import Head from 'next/head';
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
  console.log(project);
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
          <div className="m-4">
            <span className="font-bold text-2xl">{project.name}</span>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-3 px-2">
          {project.images.length > 1 ? (
            <div className="grid md:grid-cols-3 gap-4">
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
          )}

          <div className="">
            <h1 className="font-bold underline">Technologies:</h1>
            <ul>
              {project.stacks.map((stack) => (
                <li>{stack}</li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Details;
