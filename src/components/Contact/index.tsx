import React from 'react';
import {Container} from '../Container'
import {ContactHeading} from './ContactHeading';
import {Takeaways} from './Takeaways';
import {Testimonials} from './Testimonials';
import {ContactCard} from './ContactCard';


export const Contact: React.FC = () => {

  return (
    <>
      <Container
        id="contact"
        pt={"9vh"}
        justifyContent="space-evenly"
      >

        <ContactHeading />
        <Takeaways />
        <Testimonials />

        <ContactCard/>
        {/* 
          add a button for a modal form to pop out so you can 
          send a message to me 
        */}

      </Container>

    </>
  )
}

