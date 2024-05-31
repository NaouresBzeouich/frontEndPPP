import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/pageParts/AppBar';
import Footer from './components/pageParts/Footer';
import Hero from './components/pageParts/Body';
import getLPTheme from './getLPTheme';


function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Footer />
      <Box sx={{ bgcolor: 'background.default' }}>
      </Box>
    </ThemeProvider>
  );
}

export default App;
