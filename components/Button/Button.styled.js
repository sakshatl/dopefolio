import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  padding: `${theme.spaces[3]} ${theme.spaces[6]}`,
  borderRadius: "4px",
  border: "none",
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
  color: theme.colors.white,
  backgroundColor: theme.colors.purple[600],
}));
