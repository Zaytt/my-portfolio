import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Me from '../Me';
import WhatIDo from '../WhatIDo';

test('info about me is displaying properly', () => {
  render(<Me />);

  expect(
    screen.getByRole('heading', { name: /about me/i })
  ).toBeInTheDocument();
  const meText = screen.getByText('Ivan Chavez');
  expect(meText).toBeInTheDocument();
  const meText2 = screen.getByText(
    `I've had a passion for coding and problem solving since highschool.`
  );
  expect(meText2).toBeInTheDocument();
});

test('buttons are rendering correctly', () => {
  render(<Me />);
  expect(
    screen.getByRole('button', { name: /contact me/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /see portfolio/i })
  ).toBeInTheDocument();
});

test('skills and what I do are displaying correctly', async () => {
  render(<WhatIDo />);

  const backEndImg = await screen.findByRole('img', {
    name: 'back-end-development-icon',
  });
  const backEndTitle = await screen.findByRole('heading', {
    name: /back-end development/i,
  });

  expect(backEndImg).toBeInTheDocument();
  expect(backEndTitle).toBeInTheDocument();

  const frontEndImg = await screen.findByRole('img', {
    name: 'front-end-programming-icon',
  });
  const frontEndTitle = await screen.findByRole('heading', {
    name: /front-end programming/i,
  });

  expect(frontEndImg).toBeInTheDocument();
  expect(frontEndTitle).toBeInTheDocument();

  const apiImg = await screen.findByRole('img', {
    name: 'api-development-icon',
  });
  const apiTitle = await screen.findByRole('heading', {
    name: /api development/i,
  });

  expect(apiImg).toBeInTheDocument();
  expect(apiTitle).toBeInTheDocument();

  const cloudImg = await screen.findByRole('img', {
    name: 'cloud-integration-icon',
  });
  const cloudTitle = await screen.findByRole('heading', {
    name: /cloud integration/i,
  });

  expect(cloudImg).toBeInTheDocument();
  expect(cloudTitle).toBeInTheDocument();
});
