import React from 'react';
import './Home.css';

export default function Home(props) {
  return (
    <div>
      <main className='hero-section'>
        <h1 id='hero-title'>Joseph Rivera | Software Developer</h1>
        <h3 id='hero-subtitle'>Dedicating to growing in my career and being better than I was yesterday.</h3>
      </main>
      <section>
        <h2>Who am I?</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          ...
        </ul>
      </section>
      <section>
        <h2>Want to get in touch?</h2>
        <form>
          <label>
            Name:
            <input type='text' id='contact-name' />
          </label>
          <label>
            Email:
            <input type='email' id='contact-email' />
          </label>
          <label>
            Message:
            <textarea id='contact-message' />
          </label>
        </form>
      </section>
    </div>
  );
}