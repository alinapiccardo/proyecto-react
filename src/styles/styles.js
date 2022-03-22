import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5f4a54',
    },
    secondary: {
      main: '#d9c7db',
    },
    text: {
      primary: 'rgba(55,54,54,0.87)',
      secondary: '#ae75b7',
      disabled: 'rgba(175,175,175,0.38)',
      hint: '#6a1b9a',
    },
  },
  typography: {
    fontWeightLight: 200,
    fontFamily: 'Raleway',
    fontWeightBold: 800,
    h1: {
      fontFamily: 'Raleway',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Raleway',
    },
    h4: {
      fontFamily: 'Raleway',
    },
    h5: {
      fontFamily: 'Raleway',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: 300,
    },
    subtitle1: {
      fontFamily: 'Poppins',
      fontWeight: 300,
    },
    subtitle2: {
      fontFamily: 'Poppins',
    },
    body1: {
      fontFamily: 'Poppins',
    },
    body2: {
      fontFamily: 'Poppins',
    },
  },
  components: {
       
  },
});

export default theme;