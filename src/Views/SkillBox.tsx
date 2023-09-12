import { Box } from '@mui/material'

interface ISkill{
    icon?: any,
    value: string
}

const SkillBox = ({icon, value}: ISkill) => {
  return (
    <Box sx={{
        width:'auto',
        padding: '1vh 1vw',
        border: '1px solid lightgray',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: '1vw',
        marginTop: '1vh'
    }}>
        {icon} {value}
    </Box>
  )
}

export default SkillBox