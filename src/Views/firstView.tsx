import { Box } from "@mui/material"
import './firstView.css';
import Header1 from "./Header1";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Header2 from "./Header2";
import MyProfile from "./MyProfile";
import { BioTabs } from "./TabsBio";



const FirstView = () => {

  return (
    <Box sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
    }}>
        <Box sx={{
            width: '60vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            
        }}>
            <Header1/>
        <Box sx={{
            width: '70%',
            height: '50vh',
            backgroundColor: 'whitesmoke',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px 1px lightgray'

        }}>
        <div style={{
            width: '100%',
            height: '17%',
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: 'white'
        }}>

            <p style={{
                marginLeft: '3vw',
                fontWeight: '600',
                fontSize: '1.3rem',
            }}>Welcome! <span style={{
                fontSize: '1rem',
                fontWeight: '400',
            }}>to my portfolio. </span></p>
        </div>
        <div style={{
            width: '100%',
            height: '82%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '1vh 1vw 0 1vw'
        }}>
           
        <BioTabs/></div>
        </Box>
        <Box sx={{
            width: '100%',
            height: '5vh',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: 'black',
        }}>
            <ul style={{
                width: '40%',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>

            <LinkedInIcon/>
            <GitHubIcon/>
            <EmailIcon/>
            <WhatsAppIcon/>
            <InstagramIcon/>
            </ul>
        </Box>
        </Box>
        <Box sx={{
            width: '40vw',
            height: '100vh',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Header2/>
            <MyProfile/>
            <div></div>
        </Box>
    </Box>
  )
}

export default FirstView