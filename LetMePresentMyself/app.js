// header title
const headerTitle = document.querySelector(".header-title");
headerTitle.addEventListener("mouseover", changeHeaderTitleToÅlexander);
headerTitle.addEventListener("mouseout", changeHeaderTitleToOleksander);

function changeHeaderTitleToÅlexander() {
    
}

function changeHeaderTitleToOleksander() {

}

// navigation
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(e => e.addEventListener('click', showContainers));

function showContainers(event) {
    const container = document.querySelectorAll('.display-show');
    container.forEach(e => {
        e.classList.remove("display-show");
    });
    const articleId = event.target.dataset.id;
    const articleElement = document.querySelectorAll("." + articleId)[0];
    articleElement.classList.add("display-show");
}

// my projects
const projects = [
    {
        id: 1,
        title: "The Funky Scientists",
        img: "./images/funky-scientists-snap.png",
        alt: "The Funky Scientists screenshot",
        desc: "Responsive CSS animations layout"
    },
    {
        id: 2,
        title: "Music to code to",
        img: "./images/react-app-snap01.png",
        alt: "The Music to code to application screenshot",
        desc: "Web application written in React. Allows user to browser through discographies of different music artists, which play Drum&Bass, Deep House or Chill and listen to 30 seconds song snippets. The app is using Deezer streaming service API."
    }
];

window.addEventListener('DOMContentLoaded', () => {
    displayMyProjects(projects);
  });

const myProjectsContainer = document.querySelector(".my-projects-container");

function displayMyProjects(projectsArray) {
    console.log(myProjectsContainer);
    let myProjects = projectsArray.map((e) => {
        return `<section class="project">
        <aside class="project-image"><img src="${e.img}" alt="${e.alt}"></aside>
        <aside class="project-desc">
            <h3 class="project-title">${e.title}</h3>
            <p>${e.desc}</p>
        </aside>
        </section>`;
    });
    myProjects = myProjects.join('');
    myProjectsContainer.innerHTML = myProjects;
}