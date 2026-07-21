import { fireEvent, render, screen } from '@testing-library/react';
import './i18n';
import App from './App';

test('renders the ALKOTBAN brand name in the navigation', () => {
  render(<App />);
  const brandLinks = screen.getAllByText(/الكتبان|ALKOTBAN/i);
  expect(brandLinks.length).toBeGreaterThan(0);
});

test('internal product and section links stay inside the SPA', () => {
  render(<App />);

  const productsLink = document.querySelector('a[href$="/products"]');
  expect(productsLink).toBeInTheDocument();
  fireEvent.click(productsLink);
  expect(document.querySelector('.filters_menu')).toBeInTheDocument();
  expect(document.querySelector('a[href$="/products"]')).toHaveClass('active');

  const aboutLink = document.querySelector('a[href$="/#about"]');
  expect(aboutLink).toBeInTheDocument();
  fireEvent.click(aboutLink);
  expect(window.location.hash).toBe('#about');
  expect(document.getElementById('about')).toBeInTheDocument();
  expect(document.querySelector('a[href$="/#about"]')).toHaveClass('active');
  expect(document.querySelector('a[href$="/products"]')).not.toHaveClass('active');
});
