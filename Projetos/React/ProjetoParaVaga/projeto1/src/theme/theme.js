import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#348a62',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
