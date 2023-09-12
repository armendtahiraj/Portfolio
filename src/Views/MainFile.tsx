import { Box } from '@mui/material'
import FirstView from './firstView'
import ProjectSection from './ProjectSection'

const MainFile = () => {
  return (
    <>
    
    <Box sx={{
      width: '100vw',
      height: '100vh',
        
    }}>
        <FirstView/>
    </Box>
    <Box sx={{
      width: '100vw',
      height: '100vh',
      
  }}>
      <ProjectSection/>
  </Box>

      </>
  )
}

export default MainFile