import Layout from '../../layouts/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import projects from '../../data/projects.json';

const ShowProject = ({ project }) => {
  const router = useRouter();

  return (
    <>
      <Layout title={project.name}>
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="w-full">
              <img src={project.img} alt={project.name} className="w-full rounded-xl" />
            </div>
            <div>
              <span className="bg-primary text-white px-2 py-1 rounded-lg">{project.type}</span>
              <h1 className="text-2xl mt-3 text-white">{project.name}</h1>
              <p className="text-white mb-2">{project.description}</p>
              <span className="bg-white px-2 py-1 text-secondary rounded-lg">{project.stacks}</span>
              <div className="flex gap-x-2 mt-2">
                <a href={project.url.github} target="_blank" className="px-2 py-1 rounded-lg bg-black text-white">
                  <i className="bi bi-github"></i>
                </a>
                <a href={project.url.website} target="_blank" className="px-2 py-1 rounded-lg bg-primary text-white">
                  <i className="bi bi-globe2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ShowProject;

ShowProject.getInitialProps = (router) => {
  const project = projects.find((e) => {
    return e.slug == router.query.slug;
  });

  return {
    project,
  };
};
