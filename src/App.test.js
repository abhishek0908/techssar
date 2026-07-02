import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Techssar branding', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /you build/i });
  expect(heading).toBeInTheDocument();
});
