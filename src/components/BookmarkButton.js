import {useState} from 'react';
import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

export default function BookmarkButton({toggleBookmark, id, isLiked}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function onToggleBookmark() {
    setIsBookmarked(!isBookmarked);
    toggleBookmark(id);
  }

  return (
    <StyledBookmark onClick={onToggleBookmark}>
      {isLiked ? <StyledBookmarkHeart active="true" /> : <StyledBookmarkHeart />}
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
  font-size: 1.2rem;
  color: ${({active}) => (active ? '#1E90FF' : '#FFFFFF')};
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2));
`;
