import styled from 'styled-components';

import Bookmark from '../images/Bookmark.png';
import BookmarkActive from '../images/BookmarkActive.png';

export default function ToggleBookmark({isBookmarked, onToggleBookmark}) {
  return (
    <>
      <StyledIconBookmark onClick={onToggleBookmark}>
        {isBookmarked ? <img src={BookmarkActive} alt="is bookmarked" /> : <img src={Bookmark} alt="not bookmarked" />}
      </StyledIconBookmark>
    </>
  );
}

const StyledIconBookmark = styled.button`
  height: 0.5rem;
  width: 0.5rem;

  img {
    width: 25px;
    height: 25px;
  }
`;
