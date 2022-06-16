import { createContext, useState } from "react";
import { theme } from "../../theme/theme";

export const AppThemeContext = createContext();

const AppThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppThemeContext.Provider value={{ isDarkMode, toogleThemeMode }}>
      {children}
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;
