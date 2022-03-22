import * as React from 'react';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/styles.js';

  export default function SvgIconsColor() {
    return (
    <ThemeProvider theme = {theme}>
      <Box
        sx={{
          '& > :not(style)': {
            m: 2,
          },
        }}
      >
      <ShoppingCartOutlinedIcon fontSize="large" color="secondary"/>
      </Box>
    </ThemeProvider>
    );
  }
