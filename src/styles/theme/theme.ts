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
      primary: '#1e1a14',
    }
  },
  typography: {
    fontFamily: '"Haffer XH", sans-serif',
    h1: { fontFamily: '"ParaCentral-Light", serif' },
    h2: { fontFamily: '"ParaCentral-Light", serif' },
    h3: { fontFamily: '"ParaCentral-Light", serif' },
    monospace: {
      fontFamily: '"DMMono", monospace',
      fontSize: '0.875rem',
      backgroundColor: '#f5f5f5',
      padding: '4px 8px',
      borderRadius: 4,
    }
  },
});

export default theme;