import React, { Component } from 'react';
import style from './Layout.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// pages 
const pages = [
  { name: "blog", route: "/blog", component: null },
  { name: "projects", route: "/projects", component: null },
  { name: "about", route: "/about", component: null },
]

const SITE_NAME = "michael carolin"

const NavLink = (props) => {
  const navClass = "nav-link " + (props.isCurrent ? "selected" : "")
  return (
    <span className="nav-link-flex-container" key={ props.link.name }>
      <li className={navClass}>
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
    currentPage: "/projects",
  }

  render() {
    return (
      <Router>
        <div className="welcome-root">
          <div className='nav-header'> 
            <span className="nav-title">{SITE_NAME}</span>
            <NavLinks links={pages} 
                      currentPage={this.state.currentPage}
                      containerClass="nav-link-desktop-container" />
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
