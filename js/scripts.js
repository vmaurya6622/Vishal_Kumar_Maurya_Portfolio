document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            name: "Project One",
            description: "Description of project one.",
            link: "https://github.com/your-username/project-one"
        },
        {
            name: "Project Two",
            description: "Description of project two.",
            link: "https://github.com/your-username/project-two"
        }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;
        projectList.appendChild(projectItem);
    });
});
