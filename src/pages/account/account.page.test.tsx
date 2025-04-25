import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import AccountPage from'./account.page';

describe('AccountPage', () => {
  it('renders the AccountPage component', () => {
    render(<AccountPage />)
    
    screen.debug();
  })
})