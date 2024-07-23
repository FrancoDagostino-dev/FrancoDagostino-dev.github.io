import React from "react";

interface ProjectLayoutProps {
  img: string;
  title: string;
  content: string;
  link: string;
  type: string;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({img, title, content, link, type}) => {
  return (
    <div className='project-grid'>
        <div className='project-grid-img'>
                <div>
                    <img src={img}/>
                </div>
            </div>
            <div className='project-information'>
                <h2>{title}</h2>
                <p>{type}</p>
                <hr></hr>
                <p>{content}
                </p>
                <a className="link-to-code" href={link}>Click to see the repository &#8594;</a>
            </div>
    </div>
  )
}
export default ProjectLayout