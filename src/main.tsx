import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import IndexPage from '@pages/index/index.page.tsx';
import AccountPage from '@pages/account/account.page';
import './styles/_global.css';

function render() {
  const rootEl = document.getElementById('root') ?? undefined;

  if (!rootEl) {
    return <div>Root element is not defined</div>;
  }
  
  return createRoot(rootEl).render(
    <StrictMode>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/account">My Account</Link>
        </nav>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
}

render();