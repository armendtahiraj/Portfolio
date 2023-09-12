import { Box } from "@mui/material";
import "./firstView.css";
import ProjectContanier from "./ProjectContanier";
import SkillBox from "./SkillBox";
import projects from "../data/Projects.json";

const ProjectSection = () => {
  projects.map((proj: any, index: number) => {
    console.log(proj?.title);
  });
  console.log(projects);

  const frontedSkills = [
    "Angular",
    "React",
    "Typescript",
    "Javascript",
    "Redux Toolkit",
    "RTK query",
    "JWT",
    "Axios",
    "Angular Material",
    "MUI",
    "WebSocket",
  ];

  const backendSkills = ["NodeJs", "MongoDB", "PostgresQL", "WebSocket"];
  const dataSkills = [
    "R/Rstudio",
    "Python [Numpy]",
    "Python [Pandas]",
    "Python [Matplotlib]",
    "PySpark",
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderBottom: "1px solid white",
          }}
        >
          <h2>myPROJECTS</h2>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "85%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {projects?.length !== 0
            ? projects.map((proj: any, index: number) => (
                <ProjectContanier
                  key={index}
                  id={proj?.id}
                  title={proj?.title}
                  description={proj?.description}
                  img={proj?.img}
                  frontendSkill1={proj?.frontSkill1}
                  frontendSkill2={proj?.frontSkill2}
                  frontendSkill3={proj.frontSkill3}
                  backendSkill1={proj?.backendSkill1}
                  backendSkill2={proj?.backendSkill2}
                  backendSkill3={proj?.backendSkill3}
                />
              ))
            : "No project yet"}
        </Box>
        <button>See all projects</button>
      </Box>
      <Box
        sx={{
          width: "40vw",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            borderBottom: "1px solid black",
          }}
        >
          <h2>mySKILLS</h2>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <b>FRONTEND</b>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {frontedSkills.map((skill, index: number) => (
              <SkillBox key={index} value={skill} />
            ))}
          </div>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "15%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <b>BACKEND</b>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {backendSkills.map((skill, index: number) => (
              <SkillBox key={index} value={skill} />
            ))}
          </div>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "15%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <b>DATA ANALYST</b>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {dataSkills.map((skill, index: number) => (
              <SkillBox key={index} value={skill} />
            ))}
          </div>
        </Box>
        <div></div>
      </Box>
    </Box>
  );
};

export default ProjectSection;
