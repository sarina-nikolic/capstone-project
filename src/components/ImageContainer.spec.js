import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ImageContainer from './components/ImageContainer';
import garments from './garmentsData.js';

describe('rendering photos', () => {
  it('renders all images', () => {
    render(<ImageContainer />);
    garments.forEach(garmentImage => {
      expect(screen.getByText(garmentImage.name)).toBeInTheDocument();
    });
  });
});
