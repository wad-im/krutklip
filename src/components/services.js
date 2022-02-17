import React from 'react';

import ServiceItem from './service-item';
import {services} from '../data/data.js'

const Services = () => {

    return ( 
        <section className="my-14 col-start-2 col-span-4">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. Iure consectetur corporis optio vitae!</p>
            <div className='grid grid-cols-3 gap-8'>
                {
                    services.map(service => (
                        <ServiceItem details={service} key={service.id}/>
                    ))
                }
            </div>
        </section>
     );
}
 
export default Services;