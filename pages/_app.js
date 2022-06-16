import { ThemeProvider } from "@emotion/react";
import { useContext } from "react";
import AppThemeProvider, {
  AppThemeContext,
} from "../context/AppThemeContext/AppThemeContext";
import "../styles/globals.css";
import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <App>
        <Component {...pageProps} />
      </App>
    </AppThemeProvider>
  );
}

function App({ children }) {
  const { isDarkMode } = useContext(AppThemeContext);
  return (
    <ThemeProvider
      theme={
        isDarkMode
          ? { ...theme, darkMode: true }
          : { ...theme, darkMode: false }
      }
    >
      {children}
    </ThemeProvider>
  );
}

export default MyApp;
