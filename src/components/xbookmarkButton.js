import {useState} from 'react';
import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function onToggleBookmark() {
    setIsBookmarked(!isBookmarked);
  }

  return (
    <StyledBookmark onClick={onToggleBookmark}>
      {isBookmarked ? <StyledBookmarkHeart active="true" /> : <StyledBookmarkHeart />}
    </StyledBookmark>
  );
}

const StyledBookmark = styled.button`
  position: absolute;
  right: 0.2rem;
  top: 0.5rem;
  border: none;
  background: transparent;
`;

const StyledBookmarkHeart = styled(FaHeart)`
  font-size: 1rem;
  color: ${({active}) => (active ? '#5882FA' : '#FFFFFF')};
`;
