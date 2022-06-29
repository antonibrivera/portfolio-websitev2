import React from 'react';
import './ProjectItem.css';

export default function Project(props) {
  return (
    <article className='project-item' key={props.id}>
      <h2>{props.title}</h2>
      <img src={props.img.src} alt={props.img.alt} />
    </article>
  );
}