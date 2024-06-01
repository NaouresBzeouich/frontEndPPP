import { alpha } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";

interface StartBtnProps {
  text: string;
  onClick: () => void;
}

const StartBtn: React.FC<StartBtnProps> = ({ text, onClick }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:theme.palette.mode === "light"
        ? 'white'
        : 'gainsboro', 
        borderRadius: "10px",
        outline: "1px solid",
        outlineColor:
          theme.palette.mode === "light"
            ? alpha("#BFCCD9", 1)
            : alpha("#9CCCFC", 1),
        boxShadow:
          theme.palette.mode === "light"
            ? `0 0 24px 1px ${alpha("#9CCCFC", 1)}`
            : `0 0 24px 1px ${alpha("#033363", 1)}`,
      })}
    >
      <Button variant="text" size="large" onClick={onClick}>
        <Typography variant="h5">{text}</Typography>
      </Button>
    </Box>
  );
};

export default StartBtn;
