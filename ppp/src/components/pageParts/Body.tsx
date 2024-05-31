import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {SparklesCore} from '../ui/Sparkles'; 
import Title from '../bodyParts/Title'; 
import Btn from '../bodyParts/Btn';
import BodyContainer from '../bodyParts/Container';

const Body = () => {
  const [step, setStep] = React.useState<number>(0);

  const handleButtonClick = () => {
    setStep((prevStep) => (prevStep + 1) % 3); // Reset to 0 after the third step
  };

  const getButtonLabel = () => {
    switch (step) {
      case 0:
        return 'Start Now';
      case 1:
        return 'See the Result';
      case 2:
        return 'View Image Results';
      default:
        return 'Start Now';
    }
  };

  return (
    <Box
      id="Body"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Title/>
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
           <Btn text={getButtonLabel()} onClick={handleButtonClick} />
          </Stack>
          
        </Stack>
        <BodyContainer text={getButtonLabel()} />
      </Container>
    </Box>
  );
}

export default Body ; 