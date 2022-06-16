import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => {
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
