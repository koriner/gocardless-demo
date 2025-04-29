import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f1f252',
    },
    secondary: {
      main: '#1e1a14',
    },
    text: {
      primary: '#18211C',
    },
    error: {
      main: '#C52F2F',
    }
  },
  typography: {
    fontFamily: '"Haffer XH", sans-serif',
    h1: { fontFamily: '"ParaCentral-Light", serif' },
    h2: { fontFamily: '"Haffer XH", sans-serif' },
    h3: { fontFamily: '"Haffer XH", sans-serif' },
    monospace: {
      fontFamily: '"DMMono", monospace',
      fontSize: '0.875rem',
      backgroundColor: '#f5f5f5',
      padding: '4px 8px',
      borderRadius: 4,
    }
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: '#f1f252',
            textDecoration: 'none',
          },
        },
      },
    },
  },
});

export default theme;