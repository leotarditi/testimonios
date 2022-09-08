import React from 'react';
import '../stylesheets/Testimonio.css';

export function Testimonio(props) {
  return(
    <div className='div-testimonio'>
      <img 
        className='image-testimonio'
        src={require(`../images/${props.image}.png`)}
        alt={props.imageName} />
      <div className='div-text-testimonio'>
        <p className='name-testimonio'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='position-testimonio'>
          {props.position} at <strong>{props.company}</strong>
        </p>
        <p className='text-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}