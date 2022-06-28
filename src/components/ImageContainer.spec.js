import {render, screen} from '@testing-library/react';

import ImageContainer from './components';

describe('Render', () => {
  it('renders images', () => {
    render(<ImageContainer />);

    const image = screen.getByLabelText('id');

    expect(image).toHaveAttribute('id');
  });
});
