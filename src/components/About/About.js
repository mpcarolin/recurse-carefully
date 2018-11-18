import React, { Component } from 'react';
import './About.css';

const description =  `
	Hi, I'm Michael Carolin: a Software Engineer who likes to build web applications, explore
	functional programming, and sometimes write about software design, mechanical keyboards, and science fiction.
`

const links = [
	{
		'name': 'Contact',
		'route': 'mailto:mpcarolin.dev@gmail.com'
	},
	{
		'name': 'LinkedIn',
		'route': 'http://www.linkedin.com/in/mpcarolin'
	},
	{
		'name': 'Github',
		'route': 'https://github.com/mpcarolin'
	}
]

const AboutLink = (props) => {
	return (
		<h4>
			<a className='about-link' href={props.link.route}>{props.link.name}</a>
		</h4>	
	)

}

class About extends Component {
  render() {
    return (
    	<div className='about-container'>
	    	<h3 className='about-header'>About me</h3>
			<p className='about-description'>{ description }</p>
			{
				links.map(link => <AboutLink link={link} key={link.name} />)
			}
    	</div>
    );
  }
}

export default About;
