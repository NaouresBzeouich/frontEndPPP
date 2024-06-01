import React from 'react';
import { Box, Typography , useTheme } from '@mui/material';
import { SparklesCore } from '../ui/Sparkles';
import { alpha } from "@mui/material";


interface SparklesEffectProps {
  particleColor?: string;
}


const SparklesEffect: React.FC<SparklesEffectProps> = ({ particleColor }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{  width: '100%', height: '100%', }}>      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor={
            particleColor ||
            (theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.primary.light) }
        
          />
      </Box>
    </Box>
  );
};

const Title: React.FC = () => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 4, sm: 8 }, // Increased top padding
        pb: { xs: 5, sm: 10 },
      }}
    >
      <Typography
        variant="h1"
        sx={(theme) => ({
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
          fontFamily: 'serif',
          fontSize: '65px',
          textShadow: 
          theme.palette.mode === "light"
          ? `1px 1px 2px black, 0 0 1em royalblue, 0 0 0.2em royalblue`
          :`1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue`,
                })}
      >
        SnapShop:&nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }}
        >
          Find your product
        </Typography>
      </Typography>

      <SparklesEffect />
    </Box>
  );
};

export default Title;
