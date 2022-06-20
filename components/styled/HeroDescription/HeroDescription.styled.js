import styled from "@emotion/styled";

export const HeroDescription = styled.p(({ theme }) => {
  return {
    fontSize: theme.fontSizes.xl,
    lineHeight: "42px",
    marginTop: theme.spaces[8],

    "@media screen and (max-width : 1024px)": {
      fontSize: theme.fontSizes.medium,
      lineHeight: "36px"
    }
  };
});
