import React from 'react';
import styled from '@emotion/styled';

const StyledTimeDisplay = styled.div`
  /* styles for the time display */
`;

const TimeDisplay = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    <StyledTimeDisplay>
      {hours}:{minutes}
    </StyledTimeDisplay>
  );
};

export default TimeDisplay;
