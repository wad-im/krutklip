import React from 'react';

import { IconCircleCheck } from '@tabler/icons';

const ServiceItem = ({details}) => {
    return ( 
        <div className='p-8 rounded-lg bg-stone-100 mt-8 h-fit'>
            <h3 className='font-bold text-xl mb-4'>{details.name}</h3>
            <span className='font-semibold text-xl mb-4 inline-block'>{details.price}</span>
            <p className='mb-4'>{details.description}</p>
            <div>
                <ul>
                    {
                        details.features.map(feature => (
                            <li className='flex items-center mb-4' key={`${details.id}${details.features.indexOf(feature)}`}>
                                <IconCircleCheck className='mr-4'/> {feature}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default ServiceItem;