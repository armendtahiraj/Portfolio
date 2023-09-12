import { Box } from '@mui/material'
import Logo from '../assets/myLogo.png'

const Header1 = () => {
  return (
    <Box sx={{
        width: '100%',
        height: '7vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }}>
        <img src={Logo} alt="logo" style={{
            width: '7vh',
        }}/>
        <h5 style={{
            cursor: 'pointer'
        }}><b>HOME</b></h5>
        <h5 style={{
            cursor: 'pointer'
        }}><b>PROJECTS</b></h5>
        <h5 style={{
            cursor: 'pointer'
        }}><b>CONTACT</b></h5>

      

    </Box>
  )
}

export default Header1