import React, { Component } from 'react';
import style from './Layout.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Projects from './Projects/Projects.js'
import Blog from './Blog/Blog.js'
import About from './About/About.js'

// pages 
const pages = [
  { name: "projects", route: "/projects", component: Projects },
  { name: "blog", route: "/blog", component: Blog },
  { name: "about", route: "/about", component: About }
]

// const SITE_NAME = "michael carolin"
const SITE_NAME = "recurse-carefully"

const NavLink = (props) => {
  const navClass = "nav-link " + (props.isCurrent ? "selected" : "")
  const show = (page) => (page === window.location.pathname)
  const terminalClass = show(props.link.route) ? '' : 'hide'
  return (
    <span className="nav-link-flex-container" key={ props.link.name }>
      <li className={navClass}>
        <span className={terminalClass}>&gt;_</span>
        <Link className="router-link" to={props.link.route}>{ props.link.name }</Link>
      </li>
    </span>
  )
}

const NavLinks = (props) => {
  return (
    <ul className={ props.containerClass || "" }>
      { 
        props.links.map(link => <NavLink key={link.route} link={link} isCurrent={ (link.route === props.currentPage) }/>)
      }
    </ul>
  ) 
}

// Navigation and router layout for application. Will render page content 
// within layout frame of the navigation components, depending on the
// URL routed to
class Layout extends Component {
  state = {
    currentPage: "/",
  }

  render() {
    return (
      <Router>
        <div className="site-root">
          <div className='nav-bar-container'>
            <div className="nav-title">
              <a href="/">{SITE_NAME}</a>
            </div>
            <NavLinks links={pages.filter(p => p.route !== '/')} 
                      currentPage={this.state.currentPage}
                      containerClass="nav-link-desktop-container" />
          </div>
          <div className='content-container'>
          { 
            // render the exact matched component from the route
            pages.map(page => <Route exact key={page.route} 
                                           path={page.route} 
                                           component={page.component} />)
          }
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
