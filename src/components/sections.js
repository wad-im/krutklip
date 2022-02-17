import React from 'react';

import Services from './services';
import Contact from './contact';
import Testimonials from './testimonials';
import About from './about';

const Sections = () => {
    return ( 
        <>
            <Services/>
            <Contact/>
            <Testimonials/>
            <About/>
        </>
     );
}
 
export default Sections;