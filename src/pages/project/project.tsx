import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectHeader } from "../../components/header/header";
import { IProject } from "../../interfaces/projectInterface";
import Footer from "../../components/footer/footer";
import ProjectDisplay from "../../components/projectDisplay/projectDisplay";
import Technologies from "../../components/technologies/technologies";

const Project = () => {
  const [project, setProject] = useState<IProject>();
  const { projectId } = useParams();

  useEffect(() => {
    console.log(projectId);
    fetch("../allProjects.json", {})
      .then((res) => res.json())
      .then((data) => {
        setProject(() => {
          const projects = data.filter(
            (project: IProject) => project.id.toString() === projectId
          );
          return projects[0];
        });
      });
  }, [projectId]);

  return (
    <>
      {project ? (
        <>
          <ProjectHeader title={project.title} subtitle={project.subtitle} />
          <ProjectDisplay
            title={project.title}
            desc={project.description}
            img={project.img}
          />
          <Technologies techUsed={project.technologies} />
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Project;
