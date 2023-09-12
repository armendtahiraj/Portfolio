import { Box } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';
import './firstView.css';

const MyProfile = () => {
  return (
    <Box sx={{
        width: '70%',
        height: '60%',
        // border: '1px solid white',
        boxShadow: '0px 0px 10px 1px #ffffff75',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        padding: '1vh 1vw',
        backgroundColor: '#1c1c1c'
    }}>
        <Box sx={{
            width: '100%',
            height: '45%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2vh',
            color: 'white',
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '1px solid white'
            }}>

            </div>
            <h2> Armend Tahiraj</h2>
        </Box>
        <Box sx={{
            width: '100%',
            height: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            color: 'white',
        }}>
            <div style={{
                width: '100%',
                height: '7vh',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{
                        width: "35%",
                        height: '5vh',
                        paddingLeft:'1vw',
                        border: "1px solid cyan",
                        borderRadius: "5px",
                        backgroundColor: "#ffffff",
                        display: 'flex',
                        alignContent: 'center',
                        fontSize: '12px',
                        color: 'black'
                }}>
                    <p style={{
                        padding: 0,
                        margin: 0,
                        marginTop: '1vh',
                    }}>Exprerience: <b>2+ years</b> </p>
                </div>
                <div style={{
                        width: "35%",
                        height: '5vh',
                        border: "1px solid #green",
                        borderRadius: "5px",
                        backgroundColor: "#ffffff",
                        display: 'flex',
                        alignContent: 'center',
                        paddingLeft:'1vw',
                        
                        fontSize: '12px',
                        color: 'black'
                }}>
                    <p style={{
                        padding: 0,
                        margin: 0,
                        marginTop: '1vh',
                    }}>Projects: <b>12+ projects</b> </p>
                </div>
            </div>
            <p style={{
                width: '100%',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin: 0,
            }}> <SchoolIcon sx={{
                paddingRight: '1vw'
            }}/>PM in Mathematics and Informatics</p>
            <p style={{
                width: '100%',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin:0,
            }}> <SchoolIcon sx={{
                paddingRight: '1vw'
            }}/>University of Tirana</p>

            <p style={{
                width: '100%',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin: 0,
            }}> <PlaceIcon sx={{
                paddingRight: '1vw'
            }}/>Tirana, Albania</p>
        </Box>
        <Box sx={{
            width: '100%',
            height: '15%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <li style={{
                padding: '1vh 1vw',
                color: 'green',
                backgroundColor: '#b7f4e2',
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: '500'
            }}>Frontend</li>
            <li style={{
                padding: '1vh 1vw',
                color: 'blue',
                backgroundColor: '#add6fe',
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: '500'
            }}>Backend</li>
            <li style={{
                padding: '1vh 1vw',
                color: '#876a00',
                backgroundColor: '#feebad',
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: '500'
            }}>Data Analyst</li>
        </Box>
    </Box>
  )
}

export default MyProfile