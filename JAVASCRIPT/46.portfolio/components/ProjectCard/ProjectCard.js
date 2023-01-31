import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
    <img src=${project.image} alt=${project.title} />
    <div class="header">
        <h2>${project.title}</h2>
        <div>
        <a href=${project.github}>
        <img src="/icons/github.png" alt="GitHub icon"/>
        </a>
        </div>
        <div>
        <a href=${project.link}>
        <img src="/icons/link.png" alt="Website icon"/>
        </a>
        </div>
    </div>
    <div class="detail">
    <p>${project.description}</p>
    <p class="tech">${project.tech.join(" - ")}</p>
    </div>
</div>
`;
