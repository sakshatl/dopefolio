import { ThemeProvider } from "@emotion/react";
import AppThemeProvider from "../context/AppThemeContext/AppThemeContext";
import "../styles/globals.css";
import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppThemeProvider>
  );
}

export default MyApp;
