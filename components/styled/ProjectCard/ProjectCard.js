import styled from "@emotion/styled";

export const ProjectCard = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.appTheme.projectCardBackground,
    borderRadius: "8px",
    ".projectCardThumbnail": {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDE3Njc1fHxlbnwwfHx8fA%3D%3D&w=1000&q=80')",
      height: "200px",
      backgroundPosition: "center",
      borderRadius: "8px"
    },
    ".projectCardContent": {
      padding: theme.spaces[6]
    },
    ".projectCardTitle": {
      color: theme.appTheme.headingColor,
      fontSize: theme.fontSizes.xxl
    },
    ".projectCardDescription": {
      marginTop: theme.spaces[4],
      lineHeight: "24px"
    }
  };
});
