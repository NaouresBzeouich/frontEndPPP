import { alpha } from "@mui/material";
import React from 'react';
import Button from '@mui/material/Button';
import { Typography , Box } from '@mui/material';

interface StartBtnProps {
  text: string;
  onClick: () => void;
}

const StartBtn: React.FC<StartBtnProps> = ({ text, onClick }) => {
  return (
    <Box sx={(theme) => ({
      boxShadow:
          theme.palette.mode === "light"
            ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}>
    <Button variant="outlined"size="large" onClick={onClick} >
      <Typography variant="h5">{text}</Typography>
    </Button>
    </Box>
  );
};

export default StartBtn;