
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme({
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
    typography: {
        fontFamily: 'helvetica neue',
    }
  });

  theme = responsiveFontSizes(theme);
  export default theme;