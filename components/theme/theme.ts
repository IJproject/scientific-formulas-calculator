'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    pale?: string;
    lightpale?: string;
  }

  interface SimplePaletteColorOptions {
    pale?: string;
    lightpale?: string;
  }
}

export const theme = createTheme({
  palette: {
    success: {
      main: '#0a0',
      // light: 
      // dark: 
      pale: '#cfc',
      lightpale: '#efe',
    },
    // 他のカラー設定...
  },
  // 他のテーマ設定...
});
