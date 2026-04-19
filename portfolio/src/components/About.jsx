import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-image ${isVisible ? 'animate-slide-right' : ''}`}>
          <div className="image-wrapper">
            <div className="glow-ring outer"></div>
            <div className="glow-ring inner"></div>
            <div className="profile-image">
              <img src="/PHOTO1.png" alt="Meet Parmar" />
            </div>
          </div>
        </div>

        <div className={`about-content ${isVisible ? 'animate-slide-left-container' : ''}`}>
          <h2 className="section-title">About <span>Me</span></h2>
          <h3 className="subtitle">Frontend Developer!</h3>
          <p className="about-text">
            I am a Frontend Developer with a strong understanding of HTML, CSS, JavaScript, Bootstrap, and React. As a fresher, I focus on building responsive and user-friendly web applications with clean and well-structured code. I enjoy working on modern UI designs and converting them into functional interfaces that perform smoothly across different devices. Along with frontend development, I am also exploring backend technologies and have a basic understanding of database management using SQL. I am continuously improving my skills by learning new concepts and working on practical projects. I am a quick learner, adaptable, and always ready to take on new challenges. My goal is to grow as a developer while contributing effectively to real-world projects and delivering quality work.
          </p>

          <button
            className="about-btn"
            onClick={() => scrollToSection('contact')}
          >
            More About Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default About

