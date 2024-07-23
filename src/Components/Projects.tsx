import ProjectLayout from "./ProjectLayout"
import data from '../data/data.json'

function Projects() {
  return (
    <section className='project-container'>
        <div className='project-box'>
            <h1>
                Projects
            </h1>
        </div>
        <div>
        {data.map (projects=>
        <ProjectLayout
        key={projects.id}
        img={projects.img}
        title={projects.title}
        content={projects.content}
        link={projects.link}
        type={projects.type}
        />
        )}
        </div>
    </section>
  )
}

export default Projects