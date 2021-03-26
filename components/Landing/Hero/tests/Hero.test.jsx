import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '../Hero';

test('greeting message is displaying correctly', () => {
  render(<Hero />);

  expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /ivan/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /full-stack web developer/i })
  ).toBeInTheDocument();
});

test('links to github and linkedin are displaying correctly', () => {
  render(<Hero />);

  const githubIcon = screen.getByRole('link', { name: /github-link/i });
  const linkedInIcon = screen.getByRole('link', { name: /linkedin-link/i });

  expect(githubIcon).toHaveAttribute('href', 'https://github.com/Zaytt');
  expect(linkedInIcon).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/ivanchaveze/'
  );
});
