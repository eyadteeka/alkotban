import { render, screen } from '@testing-library/react';
import './i18n';
import App from './App';

test('renders the ALKOTBAN brand name in the navigation', () => {
  render(<App />);
  const brandLinks = screen.getAllByText(/الكتبان|ALKOTBAN/i);
  expect(brandLinks.length).toBeGreaterThan(0);
});
