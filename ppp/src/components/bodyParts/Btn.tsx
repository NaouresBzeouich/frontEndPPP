import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
interface StartBtnProps {
  text: string;
  onClick: () => void;
}

const StartBtn: React.FC<StartBtnProps> = ({ text, onClick }) => {
  return (
    <Button variant="outlined"size="large" onClick={onClick}>
      <Typography variant="h5">{text}</Typography>
    </Button>
  );
};

export default StartBtn;