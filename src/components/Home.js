import React from 'react';

export default function Home() {
    return (
      <div className='row-image'>
        <body>
        <img src={require('../but_first_coffee.jpeg')} className="background-image" alt="plants and coffee"/>
        <img src={require('../coffee-image.jpeg')} className='column-image' alt="cookies and coffee"/>
        <img src={require('../cactus.jpeg')} className='column-image' alt="cookies and coffee"/>    
        <img src={require('../coffee-2.jpeg')} className='column-image' alt="cookies and coffee"/>        
        </body>
      </div>
    );
  }