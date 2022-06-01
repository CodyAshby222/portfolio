import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "../../interfaces/projectInterface";

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

  useEffect(() => {
    console.log(project);
  }, [project]);

  return <>{project ? <Typography>{project.title}</Typography> : null}</>;
};

export default Project;
