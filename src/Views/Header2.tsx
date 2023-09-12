import { Box } from '@mui/material'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Header2 = () => {
  return (
    <Box sx={{
        width: '100%',
        height: '7vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }}>
        <AllInclusiveIcon/>
        <h6 style={{
            cursor: 'pointer',
            backgroundColor: 'white',
            height: '70%',
            borderRadius: '5px',
            padding: '0vh 1vw',
            display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

        }}>Download CV</h6>
        <h5 style={{
            cursor: 'pointer',
            color: 'white',
        }}><small style={{
            display: 'flex',

        }}><CopyrightIcon sx={{
            height: '15px'
        }}/> 2023</small></h5>
        

      

    </Box>
  )
}

export default Header2