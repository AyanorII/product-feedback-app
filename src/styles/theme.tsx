interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: {
      light: string;
      dark: string;
    };
    grey: {
      light: string;
      medium: string;
      dark: string;
    };
    light: {
      light: string;
      medium: string;
      dark: string;
    };
  };
}

export const theme: Theme = {
  colors: {
    primary: "#AD1FEA",
    secondary: "#F49F85",
    tertiary: {
      light: "#62BCFA",
      dark: "#4661E6",
    },
    grey: {
      light: "#647196",
      medium: "#3A4374",
      dark: "#373F68",
    },
    light: {
      light: "#FFFFFF",
      medium: "#F7F8FD",
      dark: "#F2F4FF",
    },
  },
};
