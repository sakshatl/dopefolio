import { css } from "@emotion/css";
import { ProjectCard } from "../styled/ProjectCard/ProjectCard";

const PROJECTS = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }
];

const ProjectsList = ({ projects }) => {
  return (
    <div
      className={css({
        marginTop: "32px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        "@media screen and (max-width : 1024px)": {
          gridTemplateColumns: "1fr",
          gap: "32px"
        }
      })}
    >
      {PROJECTS.length > 0 &&
        PROJECTS.map((project) => {
          return (
            <ProjectCard key={project.id}>
              <div className="projectCardThumbnail"></div>
              <div className="projectCardContent">
                <h4 className="projectCardTitle">{project.title}</h4>
                <p className="projectCardDescription">{project.body}</p>
              </div>
            </ProjectCard>
          );
        })}
    </div>
  );
};

export default ProjectsList;
