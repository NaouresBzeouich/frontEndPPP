import React from 'react';
import Button from '@mui/material/Button';

interface StartBtnProps {
  text: string;
  onClick: () => void;
}

const StartBtn: React.FC<StartBtnProps> = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default StartBtn;