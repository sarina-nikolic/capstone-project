import {userEvent} from '@storybook/testing-library';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import BookmarkButton from './bookmarkButton';

describe('every image has its own toggleable bookmark button', () => {
  it('renders all bookmarks', () => {
    render(<BookmarkButton />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
