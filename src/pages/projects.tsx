import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import ProjectCard from '../components/project-card'


const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        {
            allProjectsJson {
                edges {
                    node {
                        title
                        desc
                        status
                    }
                }
            }
        }

    `);

    const projects = data.allProjectsJson.edges;

    return (
        <main style={{ height: '100%' }}>
            <Layout>
                <div className="card-group flex-grow-1 align-items-center justify-content-center">
                    {projects.map(({ node: project}) => {
                        const title = project.title;
                        const desc = project.desc;
                        const status = project.status;

                        return (
                            <ProjectCard title={title} desc={desc} status={status}/>
                        );
                    })}
                </div>
            </Layout>
        </main>
    )
}

export default ProjectsPage