interface Theme {
  colors: {
    primary: string;
    secondary: {
      light: string;
      dark: string;
    };
    tertiary: string;
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
    secondary: {
      light: "#62BCFA",
      dark: "#4661E6",
    },
    tertiary: "#F49F85",
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
