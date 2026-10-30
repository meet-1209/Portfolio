import React from 'react'

const Projects = () => {
  const projects = [
    {
      image: '/Photo Project 1.png',
      title: 'Random User Generator',
      description: 'Developed a web app that fetches and displays random user data using JavaScript fetch() and promises, with real-time DOM updates.',
      link: 'https://github.com/meet-1209/Random-User-.git',
    },
    {
      image: '/Photo Project 4.png',
      title: 'Weather App',
      description: 'Built a React.js weather app that fetches real-time data via APIs with Axios, featuring city search, state management, and a responsive UI.',
      link: 'https://github.com/meet-1209/Weather_App.git',
    },
    {
      image: '/Photo Project 3.png',
      title: 'Student Progress Card System',
      description: 'Developed a Student Progress Card System to manage and display student performance, grades, and academic records efficiently.',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Latest <span>Project</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
