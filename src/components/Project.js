import React from 'react';

export default function Project ({project}) {
    return (
        <div className="project-card" >
            <h3>{project.name}</h3>
            <section className="project-container ">
                <p>{project.description}</p>
                <a href={project.repolink} target="_blank">GitHub Repo</a>
                <a href={project.applink} target="_blank">App Link</a>
                <img className="proj-img" src={require(`../images/${project.image}.png`)}  />
            </section>
        </div>
    )
}