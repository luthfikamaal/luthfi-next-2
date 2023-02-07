import Layout from '../../layouts/Layout';
import projects from '../../data/projects.json';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
      <Layout title={'Projects'} description={'my recent projects'}>
        <div className="mt-16">
          <div className="mb-4">
            <h1 className="text-4xl mb-1 font-semibold text-white">Projects</h1>
            <p className="text-white">
              my recent <span className="font-bold">projects</span>
            </p>
          </div>
          <hr />
          <div className="mb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 pt-5">
              {projects.map(({ name, slug, description, img, type }) => (
                <div className="card" key={slug}>
                  <div className="mb-3">
                    <img src={img} alt={name} className="w-full rounded-lg" />
                  </div>
                  <span className="rounded-lg bg-primary text-white px-2 py-1">{type}</span>
                  <Link href={`/projects/${slug}`}>
                    <h1 className="text-xl text-white font-semibold mt-2">{name}</h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
