import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => {
  return {
    width: "80%",
    margin: "0 auto",
    "@media screen and (max-width : 1024px)": {
      width: "100%"
    }
  };
});
