import React from 'react';
import './Home.css';

export default function Home(props) {
  return (
    <div>
      <main className='hero-section'>
        <h1 id='hero-title'>Joseph Rivera | Software Developer</h1>
        <h3 id='hero-subtitle'>Dedicating to growing in my career and being better than I was yesterday.</h3>
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