import React from 'react';

import { testimonials } from '../data/data';

const Testimonials = () => {
    return ( 
        <section className="my-14 col-start-2 col-span-4">
            <h2>Hvad andre siger</h2>
            <div className='grid grid-cols-2 gap-8'>
                {
                    testimonials.map(testimonial => (
                        <div className='p-8 rounded-lg bg-stone-100 mt-8 h-fit'>
                            <p className='pb-4 italic'>"{testimonial.content}"</p>
                            <p>{testimonial.author} • {testimonial.from}</p>
                        </div>
                    ))
                }
            </div>
        </section>
     );
}
 
export default Testimonials;