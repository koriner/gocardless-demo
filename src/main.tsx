import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Button, Grid, Box, Typography } from '@mui/material';
import IndexPage from '@pages/index/index.page.tsx';
import PayoutsPage from '@pages/payouts/payouts.page.tsx';
import theme from './styles/theme/theme.ts';
import './styles/_global.css';
import Navigation from '@components/Navigation/Navigation.tsx';

function render() {
  const rootEl = document.getElementById('root') ?? undefined;

  if (!rootEl) {
    return <div>Root element is not defined</div>;
  }
  
  return createRoot(rootEl).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppBar position="fixed">
            <Toolbar>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  fontSize: '2rem',
                  marginRight: theme.spacing(3),
                }}
              >
                GoCardless
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/payouts">Payouts</Button>
            </Toolbar>
          </AppBar>

          <Grid
            container
            flexDirection="row"
            spacing={0}
            sx={{
              backgroundColor: theme.palette.grey[100],
              minHeight: 400,
              borderTopRightRadius: theme.spacing(2),
              borderBottomRightRadius: theme.spacing(2),
            }}
          >
            <Grid size={2}
              sx={{
                zIndex: 0,
            }}>
              <Navigation title="SimpleDebit" />
            </Grid>
            <Grid
              size={10}
              sx={{
                borderTopLeftRadius: theme.spacing(2),
                borderTopRightRadius: theme.spacing(2),
                borderBottomRightRadius: theme.spacing(2),
                position: 'relative',
                zIndex: 100,
                backgroundColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{
                height: '100%',
                borderRadius: theme.spacing(2),
                zIndex: 2,
                position: 'relative',
              }}>
                <Routes>
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/payouts" element={<PayoutsPage />} />
                </Routes>
              </Box>
            </Grid>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>,
  )
}

render();