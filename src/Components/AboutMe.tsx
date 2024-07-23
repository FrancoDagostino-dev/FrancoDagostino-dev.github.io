import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faCss3Alt, faJava, faGithub } from "@fortawesome/free-brands-svg-icons"

function AboutMe() {
  return (
    <div className="about-me-container">
        <div className="about-me-info">
            <h1>
                Franco D'Agostino
            </h1>
            <p>
                Full Stack Developer
            </p>
        </div>
        <div className="about-me-description">
            <div>
                <FontAwesomeIcon icon={faCode} size="xl" style={{color: "#631a1a",}} />
                <h1>Learn about me</h1>
            </div>
            <p>I'm a 21 Argentinian Full Stack developer. I started my self-taught journey back on september
                2023 when I dropped my Gastronomy studies. I'm higly interested in both back and front development.
                Hope you like my page and get in touch with me!
            </p>

            <div>
                <h2>My stack</h2>
                <FontAwesomeIcon icon={faCode} size="xl" style={{color: "#631a1a",}} />
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#631a1a",}} />
                <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#631a1a",}} />
                <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#631a1a",}} />
                <FontAwesomeIcon icon={faJava} size="2xl" style={{color: "#631a1a",}} />
                <FontAwesomeIcon icon={faDatabase} size="2xl" style={{color: "#631a1a",}} />
                <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#631a1a",}} />
            </div>
            <div>
                <p>My front-end expertise includes working with React, where 
                    I have developed dynamic and responsive user interfaces. 
                    On the back-end, I have a strong command of Java and Spring, 
                    enabling me to build robust and scalable applications. 
                    Additionally, I have a solid understanding of PostgreSQL, 
                    which allows me to manage and optimize databases effectively.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe