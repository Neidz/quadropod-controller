import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      purple50: string;
      purple100: string;
      purple200: string;
      purple300: string;
      purple400: string;
      purple500: string;
      purple600: string;
      purple700: string;
      purple800: string;
      purple900: string;

      grey50: string;
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      grey500: string;
      grey600: string;
      grey700: string;
      grey800: string;
      grey900: string;
    };
    fonts: {
      sizes: {
        small: string;
        regular: string;
        big: string;
      };
      weights: {
        light: number;
        regular: number;
        bold: number;
      };
    };
  }
}
