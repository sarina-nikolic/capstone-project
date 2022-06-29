import {render, screen} from '@testing-library/react';

import ImageContainer from './components';

describe('rendering', () => {
  it('renders images', () => {
    render(<ImageContainer />);

    const image = screen.getByLabelText('image');

    expect(image).toHaveAttribute('image');
  });
});
