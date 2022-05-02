import * as React from 'react';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
// import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FoundationTwoToneIcon from '@mui/icons-material/FoundationTwoTone';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[400]
    }
  }
})

function NavBar() {
  return (
    <div >
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          color="primary"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ display: 'flex' }}>
            <nav>
              <Button
                variant="h6"
                color="white"
                sx={{ flexGrow: 1 }}
                to="/"
                component={RouterLink}
                startIcon={<FoundationTwoToneIcon />}
              >
                New Pro Development
              </Button>
              <Button
                variant="button"
                color="text.primary"
                to="/signup"
                underline="none"
                component={RouterLink}
                startIcon={<PersonAddIcon />}
                sx={{ my: 1, mx: 1.5, flexShrink: 3 }}
              >
                Sign Up
              </Button>
              <Button
                variant="button"
                color="text.primary"
                to="/signin"
                underline="none"
                component={RouterLink}
                startIcon={<LoginIcon />}
                sx={{ my: 1, mx: 1.5, flexShrink: 3 }}
              >
                Login
              </Button>
            </nav>
            <Button to="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }} component={RouterLink}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default NavBar;
