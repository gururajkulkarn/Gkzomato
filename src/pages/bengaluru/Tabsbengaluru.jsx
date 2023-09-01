import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BengCard from './BengCard';
import Foods from '../Foods';
import Myfood from '../food';
import FoodCard from '../FoodCard';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
       <span> <img src="images/bike.png" alt="bike" width="60px" /> </span><Tab label="Delivery" style={{color:"red",fontWeight:"bold"}} {...a11yProps(0)}/>
          <Tab label="My Food" style={{color:"red",fontWeight:"bold"}} {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
  <Foods/>
  {/* <BengCard title="Best Food In Bengaluru"/> */}
<FoodCard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Foods/>
      <Myfood/>
      </TabPanel>
    </Box>
  );
}