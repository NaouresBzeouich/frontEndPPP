import React from 'react';
import { Box, Typography , useTheme } from '@mui/material';
import { SparklesCore } from '../ui/Sparkles';

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
      }}
    >
      <Typography
        variant="h1"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: 'clamp(4rem, 15vw, 6rem)',
        }}
      >
        Our latest&nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: 'clamp(4rem, 15vw, 6rem)',
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }}
        >
          products
        </Typography>
      </Typography>

      {/* Include SparklesEffect component here */}
      <SparklesEffect />
    </Box>
  );
};

export default Title;
