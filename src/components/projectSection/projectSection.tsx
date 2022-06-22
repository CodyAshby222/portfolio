import { Typography, Box, Container } from "@mui/material";
import { boxStyles } from "./projectSectionStyles";
import { RowCenter } from "../../appStyles";
import Card from "../card/card";
import { useEffect, useState } from "react";
import { IProject } from "../../interfaces/projectInterface";

const ProjectSection = () => {
  const [allProjects, setAllProjects] = useState<IProject[]>([]);

  const getAllProjects = () => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <Box id="projects" sx={boxStyles}>
        <Container>
          <Typography sx={{ mb: 2, textAlign: "center" }} variant="h4">
            PROJECTS
          </Typography>
          <Typography sx={{ mb: 2, textAlign: "center" }}>
            Select a card below to view the project and technologies used.
          </Typography>
          <RowCenter style={{ alignItems: "center" }}>
            {allProjects
              ? allProjects.map((project, i) => {
                  return (
                    <Card
                      key={`${project.title}_${project.logo}_${i}`}
                      {...project}
                    />
                  );
                })
              : null}
          </RowCenter>
        </Container>
      </Box>
    </>
  );
};

export default ProjectSection;
