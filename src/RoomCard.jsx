
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RoomCard = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        {/* Add other card content */}
      </CardContent>
    </Card>
  );
};

export default RoomCard;