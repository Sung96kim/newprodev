import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { Link as RouterLink } from 'react-router-dom'

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24 }}
            component={RouterLink}
            to="/"
          >
            {'New Pro Development'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              sx={rightLink}
              component={RouterLink}
              to="/signin"
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              sx={{ ...rightLink, color: 'secondary.main' }}
              component={RouterLink}
              to="/signup"
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
