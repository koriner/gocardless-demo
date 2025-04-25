import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Button } from '@mui/material';
import IndexPage from '@pages/index/index.page.tsx';
import AccountPage from '@pages/account/account.page';
import theme from './styles/theme/theme.ts';
import './styles/_global.css';

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
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/account">Account</Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>,
  )
}

render();