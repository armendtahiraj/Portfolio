import { Box } from "@mui/material";
import Logo from '../assets/myLogo.png'

interface Iproject {
  id:string,
  title: string;
  description: string;
  img: any;
  frontendSkill1?: string;
  frontendSkill2?: string;
  frontendSkill3?: string;
  backendSkill1?: string;
  backendSkill2?: string;
  backendSkill3?: string;
}

const ProjectContanier = ({
  id,
  title,
  description,
  img,
  frontendSkill1,
  frontendSkill2,
  frontendSkill3,
  backendSkill1,
  backendSkill2,
  backendSkill3,
}: Iproject) => {
  return (
    <Box
      sx={{
        width: "30%",
        height: "60%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <li
          style={{
            padding: "1vh 1vw",
            color: "green",
            backgroundColor: "#b7f4e2",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          Frontend
        </li>
        <li
          style={{
            padding: "1vh 1vw",
            color: "blue",
            backgroundColor: "#add6fe",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          Backend
        </li>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <img src={Logo} alt="Project Logo" style={{
            width: '100%',
            height: '100%',
        }}/>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "10%",
          overflow: "hidden",
        }}
      >
        <h4
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {title}
        </h4>
      </Box>
      <Box
        sx={{
          width: "98%",
          height: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "space-between",
          border: "1px solid black",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyItems: "space-around",
            alignItems: "center",
            borderBottom: "1px solid black",
          }}
        >
          <li
            style={{
              width: "50%",
              borderRight: "1px solid black",
              fontSize: "10px",
            }}
          >
            <b>Frontend</b>
          </li>
          <li
            style={{
              width: "50%",
              fontSize: "10px",
            }}
          >
            <b>Backend</b>
          </li>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "60%",
            display: "flex",
            justifyItems: "space-around",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              borderRight: "1px solid black",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h6
              style={{
                margin: 0,
                marginRight: "1vw",
              }}
            >
              {frontendSkill1}
            </h6>
            <h6
              style={{
                margin: 0,
              }}
            >
              {frontendSkill2}
            </h6>
            <h6
              style={{
                margin: 0,
              }}
            >
              {frontendSkill3}
            </h6>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              borderRight: "1px solid black",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h6
              style={{
                margin: 0,
                marginRight: "1vw",
              }}
            >
              {backendSkill1}
            </h6>
            <h6
              style={{
                margin: 0,
              }}
            >
              {backendSkill2}
            </h6>
            <h6
              style={{
                margin: 0,
              }}
            >
              {backendSkill3}
            </h6>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "5%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <small
          style={{
            fontSize: "10px",
            color: "purple",
          }}
        >
          See project details here
        </small>
      </Box>
    </Box>
  );
};

export default ProjectContanier;
