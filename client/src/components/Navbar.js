import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { sections, title } = props;
  

  return (
    
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} position='static'>
        <Button size="small" component={Link} to={"/"}>Home</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small" component={Link} to="/ContactUs">
          Contact-Us
        </Button>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" component={Link} to="/SignUp">
          SignUp
        </Button>
        <Button variant="outlined" size="small" component={Link} to="/SignIn">
          SignIn
        </Button>
      
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
           key={section.title}
           to={section.url}
          >
            {section.title}
          </Link>
          
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Navbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;