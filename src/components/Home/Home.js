import React from 'react';
import './Home.css';
import workspace from '../../assets/workspace-min.png';

export default function Home(props) {
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
        <p id='about-description'>Lorem ipsum dolor sit amet.</p>
      </section>
      <section className='projects-section'>
        <h2 id='projects-title'>Projects</h2>
        <ul id='projects-list'>
          ...
        </ul>
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