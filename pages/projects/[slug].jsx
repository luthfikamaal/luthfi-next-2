import Layout from '../../layouts/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import projects from '../../data/projects.json';

const ShowProject = ({ project }) => {
  const router = useRouter();

  return (
    <>
      <Layout title={project.name}>
        <h1 className="text-lg">{project.name}</h1>
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
