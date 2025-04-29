import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import PayoutsPage from'./payouts.page';

describe('PayoutsPage', () => {
  it('renders the PayoutsPage component', () => {
    render(<PayoutsPage />)
    screen.debug();
    
    const element = screen.getByTestId('PayoutsPage');
    expect(element).toBeDefined();
  })
})