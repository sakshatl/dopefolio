import styled from "@emotion/styled";
import { useContext } from "react";
import { AppThemeContext } from "../../context/AppThemeContext/AppThemeContext";

export const Button = styled.button(({ theme }) => {
  const { isDarkMode } = useContext(AppThemeContext);

  console.log("hello", isDarkMode);

  return {
    padding: `${theme.spaces[3]} ${theme.spaces[6]}`,
    borderRadius: "4px",
    border: "none",
    fontSize: theme.fontSizes.base,
    fontWeight: 500,
    color: theme.colors.white,
    backgroundColor: theme.colors.purple[600],
    cursor: "pointer",
    ":hover": {
      backgroundColor: theme.colors.purple[700],
    },
  };
});
