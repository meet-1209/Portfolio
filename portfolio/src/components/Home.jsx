import React, { useState, useEffect } from 'react'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ['Frontend Developer', 'Web Designer']

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        setTypingSpeed(75)
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h3 className="greeting">Hello, It's Me</h3>
            <h1 className="name">Meet Parmar</h1>
            <h2 className="profession">
              And I'm a <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="description">
              I’m a frontend developer who enjoys building clean, responsive, and user-friendly websites. I work with technologies like HTML, CSS, JavaScript, and React to turn ideas into functional and visually appealing web applications. I pay attention to detail and focus on writing clear, maintainable code while creating smooth user experiences across different devices. Along with frontend development, I’m also exploring backend technologies and have a basic understanding of working with SQL for database management. I’m always learning, improving my skills, and looking forward to growing as a full-stack developer while contributing to real-world projects.
            </p>

            <div className="social-icons">
              {/* <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a> */}
              <a href="https://www.linkedin.com/in/meet-parmar-300a51388" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/meet-1209" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>

            <button
              className="cta-button"
              onClick={() => scrollToSection('about')}
            >
              More About Me
            </button>
          </div>

          <div className="home-image">
            <div className="image-wrapper">
              <div className="glow-ring outer"></div>
              <div className="glow-ring inner"></div>
              <div className="profile-image">
                <img src="/PHOTO1.png" alt="Meet Parmar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-glow"></div>
    </section>
  )
}

export default Home
