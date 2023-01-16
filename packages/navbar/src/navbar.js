import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as singleSpa from 'single-spa';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
          singleSpa.navigateToUrl('/');
        break;
      case 1:
        singleSpa.navigateToUrl('/app1');
        break;
      case 2:
        singleSpa.navigateToUrl('/home');
        break;
      case 3:
        singleSpa.navigateToUrl('/app2');
        break;
      default:
        break;
    }
  };



  return (
    <div className={theme.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Testando single spa"
        >
          <Tab label="Single-Spa" {...a11yProps(0)} />
          <Tab label="React App 1" {...a11yProps(1)} />
          <Tab label="Vue js App 2" {...a11yProps(2)} />
          <Tab label="Angular App 3" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         
        </TabPanel>
        <TabPanel value={value} index={1}>
         
        </TabPanel>
        <TabPanel value={value} index={2}>
     
        </TabPanel>
        <TabPanel value={value} index={3}>
     
     </TabPanel>
    </div>
  );
}
