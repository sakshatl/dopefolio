import styles from "../../styles/portfolioSection.module.css";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import ProjectsList from "../ProjectsList/ProjectsList";

const PortfolioSection = ({ selectedIndex }) => {
  const theme = useTheme();

  return (
    <div className={styles.portfolioSection}>
      {selectedIndex === 0 ? (
        <>
          <h3
            className={css({
              fontSize: theme.fontSizes.heading3,
              color: theme.appTheme.headingColor,
              textAlign: "center"
            })}
          >
            Projects
          </h3>
          <ProjectsList />
        </>
      ) : (
        <h3
          className={css({
            fontSize: theme.fontSizes.heading3,
            color: theme.appTheme.headingColor,
            textAlign: "center"
          })}
        >
          Articles
        </h3>
      )}
    </div>
  );
};

export default PortfolioSection;
