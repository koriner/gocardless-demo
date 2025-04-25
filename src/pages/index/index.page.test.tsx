import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import IndexPage from'./index.page';

describe('IndexPage', () => {
  it('renders the IndexPage component', () => {
    render(<IndexPage />)
    
    screen.debug();
  })
})