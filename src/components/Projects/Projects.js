import React, { Component } from 'react';
import style from './Projects.css'
import axios from 'axios'

const projectComparator = (p1, p2) => {
  let date = new Date(p1.updated_at)  
  let date2 = new Date(p2.updated_at)  
  return -1 * (date - date2)
}

const roles = {
  'clojure-turtle': 'Contributor',
  'reader-view': 'Contributor',
}


const getProjects = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://api.github.com/users/mpcarolin/repos").then(response => {
      if (response.status === 200) {
        resolve(response.data.map(p => {
          p.name += p.fork ? ' (fork)': ''
          return p
        }))
      } else {
        reject(response.status)
      }
    }) 
  })
}

const Project = (props) => {
  return (
    <div className='project'>
      <div className='project-header'>
        <span className='project-name'> 
          <a href={props.project.html_url}>{ props.project.name }</a>
        </span>
      </div>
      <div className='project-content'>
        <span className='project-lang'>{props.project.language}</span>
        <p>{ props.project.description }</p> 
      </div>
    </div>
  ) 
}

class Projects extends Component {
  state = {
    projects: []
  }

  componentDidMount () {
    getProjects().then(projects => {
      this.setState({ projects })  
    })
  }

  render() {
    return (
      <div className='projects-container'>
        {
          this.state.projects
            .filter(p => (p.stargazers_count > 0))
            .sort(projectComparator)
            .map(p => <Project project={p} key={p.name} />)
        }
      </div>
    )
  }
}

export default Projects;
