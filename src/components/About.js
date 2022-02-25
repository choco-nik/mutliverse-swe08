import React from 'react';

export default function About() {
    const about1 = `
    
    Back in 2014, my girlfriend and I moved in together and, in my efforts to put my stamp on what was her place,
    
    I soon made it my mission to turn the bare, unloved balcony into an urban garden that we could be proud of. 
    
    One long weekend, I realised that this was going to be far easier said than done.`;

    const about2 = `

    Firstly, I realised that I had no idea what plants I liked nor what kind would be right for our little east-facing balcony. 
    
    I then realised that I was going to have to travel to the city’s far reaches to find a garden centre and, 
    once I’d eventually got to one, I couldn’t find anyone or anything to help guide me. 
    
    So I pulled out my iPhone and headed online. ‘Surely there’s a half-decent online garden centre’, I thought. 
    
    And there was for the experienced country gardener whereas there was nothing for a clueless urban gardener like me.`;

    const about3 = `
    
    In the end, I bought some plants from a nearby supermarket but, within four weeks, they were dead. 
    
    The plant paradise I had promised to create soon looked rather sorry for itself.
    
    Disheartened but still determined, I picked up some books, got back on the horse named ‘Gardening’ and started learning. 
    
    In the meantime, I heard more and more of my friends were struggling with the same plant problems that I had been having. 
    
    So I thought I’d try to find a way to help them and others like us.
    
    That’s how PlantShed was born, in December 2015.`;

    const about4 = `
    
    At PlantShed, we want to help bring the joy of gardening to anyone and everyone. 
    
    To do that, we bring our customers fresh, personalised ideas, we source the best plants and products from the best suppliers, then we deliver them to their new home, along with all the tips an urban gardener could possibly need to look after their new garden.
    
    So what are you waiting for? Come and plant up with PlantShed!`;
    return (
        <div>
          <br/> 
          <h1 className='row-center'>About PlantShed</h1>  
          <br/>
          <br/>
          <h2 className='about-text'>{about1}</h2>
          <br/>
          <h2 className='about-text'>{about2}</h2>
          <br/>
          <h2 className='about-text'>{about3}</h2>
          <br/>
          <h2 className='about-text'>{about4}</h2>
          {/* <img src={require('../about-image.jpeg')} classname='row-right' alt="plantshed image"/> */}
        </div>
      );
    }

