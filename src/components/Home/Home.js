import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import workspace from '../../assets/workspace-min.png';
import Project from '../ProjectItem/ProjectItem';
import database from '../../database';

export default function Home(props) {

  const generateProjectElement = (projects) => {
    const projectsArray = projects.map(project => {
      return <Project
        key={project.id}
        id={project.id}
        title={project.title}
        img={project.img}
        body={project.body}
        technologies={project.technologies}
        liveLink={project.liveLink}
        repoLink={project.repoLink}   
      />
    })
    return projectsArray;
  }

  return (
    <div>
      <main className='hero-section'>
        <div className='hero-text'>
          <h1 id='hero-title'>Hi there, I'm Joseph!</h1>
          <h3 id='hero-subtitle'>I'm a Full-Stack Software Developer based in Miami, FL with a love for developing applications that are easy to use and scale!</h3>
        </div>
        <img src={workspace} alt='Illustration of desk with chair and computer' />
      </main>
      <section className='about-section'>
        <h2 id='about-title'>Who am I?</h2>
        <p id='about-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <br />
        Learn
        </p>
        <Link to='/resume'>
          <a href='/resume' id='about-cta-btn'>View Resume</a>
        </Link>
      </section>
      <section className='projects-section'>
        <div className='projects-text'>
          <h2 id='projects-title'>Projects</h2>
          <p id='projects-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <section id='projects-list'>
          {generateProjectElement(database)}
        </section>
      </section>
      <section className='contact-section'>
        <h2 id='contact-title'>Want to get in touch?</h2>
        <form id='contact-form'>
          <legend>Contact Me</legend>
          <label htmlFor='full-name'>
            Full Name:
            <input type='text' id='full-name' name='user_name' placeholder='Full name...' />
          </label>
          <label htmlFor='email'>
            Email:
            <input type='email' id='email' name='user_email' placeholder='Email...' />
          </label>
          <label htmlFor='message'>
            Message:
            <textarea id='message' name='user_message' placeholder='Enter a brief message...' />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </section>
    </div>
  );
}