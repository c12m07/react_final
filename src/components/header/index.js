import * as React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

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

export default function Header() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function navigateHome() {
    navigate('/inicio');
  }
  function navigateProyects() {
    navigate('/proyectos');
  }
  function navigateContact() {
    navigate('/contacto');
  }
  function navigateAgenda() {
    navigate('/agenda');
  }

  return (
    <header>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <h1 className="HeaderTitle">Carlos Martinez</h1>
          <Tab
            sx={{ letterSpacing: '3px', fontSize: '15px' }}
            label="Inicio"
            onClick={navigateHome}
            {...a11yProps(0)}
          />
          <Tab
            sx={{ letterSpacing: '3px', fontSize: '15px' }}
            label="Proyectos"
            onClick={navigateProyects}
            {...a11yProps(1)}
          />
          <Tab
            sx={{ letterSpacing: '3px', fontSize: '15px' }}
            label="Contacto"
            onClick={navigateContact}
            {...a11yProps(2)}
          />
          <Tab
            sx={{ letterSpacing: '3px', fontSize: '15px' }}
            label="Agenda"
            onClick={navigateAgenda}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </header>
  );
}
