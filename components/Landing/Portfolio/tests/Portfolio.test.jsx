import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../Portfolio';

test('Portfolio images are rendering correctly', async () => {
  render(<Portfolio />);

  const pandoImg = await screen.findByRole('img', { name: 'pando-img' });
  const myPubgSquadImg = await screen.findByRole('img', {
    name: 'mypubgsquad-img',
  });

  expect(pandoImg).toBeInTheDocument();
  expect(myPubgSquadImg).toBeInTheDocument();
});
