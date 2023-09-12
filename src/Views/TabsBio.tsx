import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext} from '@mui/lab';

import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export const BioTabs =() => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Frontend" value="1" />
            <Tab label="Backend" value="2" />
            <Tab label="Data Analyst" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        
            <p style={{
                width: '95%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                fontSize: '12px',
                textAlign: 'justify'
            }}>As a developer: <br/>Most of the time I work as a Frontend developer. Coding in Javascript and Typescript is a funny thing.
            I use Angular and React to craft those ideas into visual. <br/>-<br/>
            Developing in stable, reusable and cleaned code for better efficenty.
             <br/><br/><small>Thanks for reading!</small></p>
        
        </TabPanel>
        <TabPanel value="2"><p style={{
                width: '95%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                fontSize: '12px',
                textAlign: 'justify'
            }}>Also Node with typescript together with MongoDb or Postgress for filling the area of Backend developer.</p></TabPanel>
        <TabPanel value="3"><p style={{
                width: '95%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                fontSize: '12px',
                textAlign: 'justify'
            }}>I have studied Mathematics and Informatics Engeenering and have a PM degree on this field.
            Working in DA is challenging and sometimes might get harder but is funny. </p></TabPanel>
      </TabContext>
    </Box>
  );
}