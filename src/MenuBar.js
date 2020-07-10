import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typogarphy from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function allayProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function ElevationScroll(prop) {
  const { children } = prop;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typogarphy>{children}</Typogarphy>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function MenuBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typogarphy variant="h5" className={classes.title}>
              Nakaue's Portfolio
            </Typogarphy>
            <Tabs value={value} onChange={handleChange} aria-label="tabs">
              <Tab label="About" {...allayProps(0)} />
              <Tab label="Work"  {...allayProps(1)} />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <TabPanel value={value} index={0}>
        <Container>
          <Box my={2}>
            {[...new Array(1000)].map(() => 
              `About`,
              ).join('\n')
            }
          </Box>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container>
          <Box my={2}>
            {[...new Array(1000)].map(() => 
              `Work`,
              ).join('\n')
            }
          </Box>
        </Container>
      </TabPanel>
    </div>
  );
}
